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
        foreach ($files as $file) {
            if ($file != '.' && $file != '..') {
                $this->parseFile($folder . '/' . $file);
            }
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }

    protected function parseFile($file)
    {
        $xmlContent = file_get_contents($file);
        $crawler = new Crawler($xmlContent);
        $levels = $crawler->filter('level');
        $arrayVotes = [];
        $arrayVotes[] = ["description", "validVotes", "eligibleVoters", "blankVote", "totalVotesBbE1E2", "totalVotesBbE1E2E5", "registeredVotersBb", "blankVote", "seats", "nom", "nr", "party", "seats", "votes", "a", "b", "c", "d", "e", "name", "successor", "i", "ii", "iii", "iv", "nr", "voteCandidate"];
        foreach ($levels as $level) {
            $description = $level->getAttribute('description');
            $validVotes = $level->getAttribute('valid-votes');
            $eligibleVoters = $level->getAttribute('eligible-voters');
            $blankVote = $level->getAttribute('blank-votes');
            $totalVotesBbE1E2 = $level->getAttribute('total-votes-bb-e1-e2');
            $totalVotesBbE1E2E5 = $level->getAttribute('blank-votes-bb-e1-e2-e5');
            $registeredVotersBb = $level->getAttribute('registered-voters-bb');
            $blankVote = $level->getAttribute('blank-votes');
            $seats = $level->getAttribute('seats');

            $nom = $level->getElementsByTagName('labels')[0]->getElementsByTagName('label')[0]->nodeValue != '' ? $level->getElementsByTagName('labels')[0]->getElementsByTagName('label')[0]->nodeValue : $level->getElementsByTagName('labels')[0]->getElementsByTagName('label')[1]->nodeValue;
            $crawler2 = new Crawler($level);
            $lists = $crawler2->filter('lists list');
            foreach ($lists as $list) {
                $nr = $list->getAttribute('nr');
                $party = $list->getAttribute('party');
                $seats = $list->getAttribute('seats');
                $votes = $list->getAttribute('votes');
                $a = $list->getAttribute('a');
                $b = $list->getAttribute('b');
                $c = $list->getAttribute('c');
                $d = $list->getAttribute('d');
                $e = $list->getAttribute('e');
                $crawler3 = new Crawler($list);
                $candidates = $crawler3->filter('candidates candidate');
                if (count($candidates) > 0){
                    foreach ($candidates as $candidate) {
                        $name = $candidate->getAttribute('name');
                        $successor = $candidate->getAttribute('successor');
                        $i = $candidate->getAttribute('i');
                        $ii = $candidate->getAttribute('ii');
                        $iii = $candidate->getAttribute('iii');
                        $iv = $candidate->getAttribute('iv');
                        $nr = $candidate->getAttribute('nr');
                        $voteCandidate = $candidate->getAttribute('votes');
                    }
                }
                else {
                    $arrayVotes[] = [$description, $validVotes, $eligibleVoters, $blankVote, $totalVotesBbE1E2, $totalVotesBbE1E2E5, $registeredVotersBb, $blankVote, $seats, $nom, $nr, $party, $seats, $votes, $a, $b, $c, $d, $e];
                }
            }
        }
        $myfile = fopen($file . '.csv', "w");
        foreach ($arrayVotes as $line) {
            fwrite($myfile, join(',', $line) . "\n");
        }
    }
}
