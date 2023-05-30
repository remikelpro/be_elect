<?php

namespace App\Command;

use ProxyManager\GeneratorStrategy\FileWriterGeneratorStrategy;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\DomCrawler\Crawler;

#[AsCommand(
    name: 'app:import-xml',
    description: 'Add a short description for your command',
)]
class ImportXmlCommand extends Command
{
    protected function configure(): void
    {
        $this
            ->addArgument('folder', InputArgument::REQUIRED, 'folder')
            // ->addArgument('type', InputArgument::REQUIRED, 'type');
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $folder = $input->getArgument('folder');
        // $type = $input->getArgument('type');

        if ($folder) {
            $io->note(sprintf('You passed an argument: %s', $folder));
        }
        $files = scandir($folder);
        foreach($files as $file){
            if ($file != '.' && $file != '..'){
                $this->parseFile($folder . '/' . $file);
            }
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
    
    protected function parseFile($file){
        $xmlContent = file_get_contents($file);
        $crawler = new Crawler($xmlContent);
        $levels = $crawler->filter('level');
        $arrayVotes = [];
        $arrayVotes[] = ['Level', 'Nom', 'Voteurs eligible', 'Votes valides', 'Somme des votes', 'pourrait être bon ?'];
        foreach ($levels as $level) {
            $description = $level->getAttribute('description');
            $validVotes = $level->getAttribute('valid-votes');
            $eligibleVoters = $level->getAttribute('eligible-voters');
            $seats = $level->getAttribute('seats');

            $nom = $level->getElementsByTagName('labels')[0]->getElementsByTagName('label')[0]->nodeValue != '' ?$level->getElementsByTagName('labels')[0]->getElementsByTagName('label')[0]->nodeValue : $level->getElementsByTagName('labels')[0]->getElementsByTagName('label')[1]->nodeValue;
            $crawler2 = new Crawler($level);
            $lists = $crawler2->filter('lists list');
            $votes = 0;
            foreach($lists as $list){
                $votes += $list->getAttribute('votes');
            }
            
            $arrayVotes[] = [$description, $nom, $eligibleVoters, $validVotes, $votes, ($votes == $validVotes ? 'Oui' : 'Non')];
        }
        $myfile = fopen($file . '.csv', "w");
        foreach($arrayVotes as $line){
            fwrite($myfile, join(',', $line) . "\n");
        }
    }
}
