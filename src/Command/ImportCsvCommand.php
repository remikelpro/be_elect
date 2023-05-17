<?php

namespace App\Command;

use App\Entity\Arrondissement;
use App\Entity\Canton;
use App\Entity\Commune;
use App\Entity\Election;
use App\Entity\Parti;
use App\Entity\Province;
use App\Entity\Region;
use App\Entity\Resultat;
use App\Entity\TypeElection;
use App\Entity\TypeResultat;
use App\Repository\ArrondissementRepository;
use App\Repository\CantonRepository;
use App\Repository\CommuneRepository;
use App\Repository\ElectionRepository;
use App\Repository\PartiRepository;
use App\Repository\ProvinceRepository;
use App\Repository\RegionRepository;
use App\Repository\TypeElectionRepository;
use App\Repository\TypeResultatRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use SplFileObject;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\String\Slugger\AsciiSlugger;

#[AsCommand(
    name: 'import-csv',
    description: 'import a CSV file to database, first argument is the file, and the second the entity',
)]
class ImportCsvCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $em,
        private RegionRepository $regionRepository,
        private ArrondissementRepository $arrondissementRepository,
        private ProvinceRepository $provinceRepository,
        private CantonRepository $cantonRepository,
        private TypeElectionRepository $typeElectionRepository,
        private TypeResultatRepository $typeResultatRepository,
        private PartiRepository $partiRepository,
        private ElectionRepository $electionRepository,
        private CommuneRepository $communeRepository
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('file', InputArgument::REQUIRED, 'file')
            ->addArgument('type', InputArgument::REQUIRED, 'type');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $file = $input->getArgument('file');
        $type = $input->getArgument('type');

        $io = new SymfonyStyle($input, $output);
        $io->text('Starting...');
        switch ($type) {
            case 'Region':
                return $this->importRegion($file, $input, $output);
            case 'Province':
                return $this->importProvince($file, $input, $output);
            case 'Arrondissement':
                return $this->importArrondissement($file, $input, $output);
            case 'Canton':
                return $this->importCanton($file, $input, $output);
            case 'Commune':
                return $this->importCommune($file, $input, $output);
            case 'TypeElection':
                return $this->importTypeElection($file, $input, $output);
            case 'TypeResultat':
                return $this->importTypeResultat($file, $input, $output);
            case 'Election':
                return $this->importElection($file, $input, $output);
            case 'Resultat':
                return $this->importResultat($file, $input, $output);
            case 'Parti':
                return $this->importParti($file, $input, $output);
        }
    }

    protected function importRegion(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        foreach ($file as $row) {
            if ($row) {
                $region = new Region;
                $region->translate('fr')->setName($row[1]);
                $region->translate('nl')->setName($row[2]);
                $region->translate('en')->setName($row[1]);
                $this->em->persist($region);
                $io->text($region->getName() . ' has been added.');
                $region->mergeNewTranslations();
                $this->em->flush();
            }
        }
        $io->success('All Regions had been added');

        return Command::SUCCESS;
    }

    protected function importProvince(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $province = new Province;
                $province->translate('fr')->setName($row[1]);
                $province->translate('nl')->setName($row[2]);
                $province->translate('en')->setName($row[1]);
                $region = $this->regionRepository->findOneBy(['id' => $row[3]]);
                if ($region === null) {
                    $io->error($province->getName() . ' parent not found.');
                }
                $province->setIdRegion($region);
                $this->em->persist($province);
                $io->text($province->getName() . ' has been added.');
                $province->mergeNewTranslations();
                $this->em->flush();
            }
        }
        $io->success('All Provinces had been added');

        return Command::SUCCESS;
    }

    protected function importArrondissement(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $arrondissement = new Arrondissement;
                $arrondissement->translate('fr')->setName($row[1]);
                $arrondissement->translate('nl')->setName($row[2]);
                $arrondissement->translate('en')->setName($row[1]);
                $province = $this->provinceRepository->findOneBy(['id' => $row[3]]);
                if ($province === null) {
                    $io->error($arrondissement->getName() . ' s parent not found');
                }
                $arrondissement->setIdProvince($province);
                $this->em->persist($arrondissement);
                $io->text($arrondissement->getName() . ' has been added.');
                $arrondissement->mergeNewTranslations();
                $this->em->flush();
            }
        }
        $io->success('All Provinces had been added');

        return Command::SUCCESS;
    }

    protected function importCanton(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $canton = new Canton;
                $canton->translate('fr')->setName($row[1]);
                $canton->translate('nl')->setName($row[2]);
                $canton->translate('en')->setName($row[1]);
                $arrondissement = $this->arrondissementRepository->findOneBy(['id' => $row[3]]);
                if ($arrondissement === null) {
                    $io->error($canton->getName() . ' s parent not found');
                }
                $canton->setIdArrondissement($arrondissement);
                $this->em->persist($canton);
                $io->text($canton->getName() . ' has been added.');
                $canton->mergeNewTranslations();
                $this->em->flush();
            }
        }
        $io->success('All Provinces had been added');

        return Command::SUCCESS;
    }

    protected function importCommune(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $commune = new Commune;
                $commune->translate('fr')->setName($row[1]);
                $commune->translate('nl')->setName($row[2]);
                $commune->translate('en')->setName($row[1]);
                $canton = $this->cantonRepository->findOneBy(['id' => $row[3]]);
                if ($canton === null) {
                    $io->error($commune->getName() . ' s parent not found, id : ' . $row[3]);
                }
                $commune->setIdCanton($canton);
                $this->em->persist($commune);
                $io->text($commune->getName() . ' has been added.');
                $commune->mergeNewTranslations();
                $this->em->flush();
            }
        }
        $io->success('All Provinces had been added');

        return Command::SUCCESS;
    }

    protected function importTypeElection(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        $slugger = new AsciiSlugger();
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $typeElection = new TypeElection;
                $typeElection->translate('fr')->setName($row[1]);
                $typeElection->translate('nl')->setName($row[2]);
                $typeElection->translate('en')->setName($row[1]);
                $typeElection->translate('fr')->setSlug((string)$slugger->slug($row[1]));
                $typeElection->translate('nl')->setSlug((string)$slugger->slug($row[2]));
                $typeElection->translate('en')->setSlug((string)$slugger->slug($row[1]));

                $this->em->persist($typeElection);
                $io->text($typeElection->getName() . ' has been added.');
                $typeElection->mergeNewTranslations();
                $this->em->flush();
            }
        }
        $io->success('All types had been added');

        return Command::SUCCESS;
    }
    protected function importTypeResultat(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        $slugger = new AsciiSlugger();
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $typeResultat = new TypeResultat;
                $typeResultat->translate('fr')->setName($row[1]);
                $typeResultat->translate('nl')->setName($row[1]);
                $typeResultat->translate('en')->setName($row[1]);
                $typeResultat->translate('fr')->setSlug((string)$slugger->slug($row[1]));
                $typeResultat->translate('nl')->setSlug((string)$slugger->slug($row[2]));
                $typeResultat->translate('en')->setSlug((string)$slugger->slug($row[1]));


                $this->em->persist($typeResultat);
                $io->text($typeResultat->getName() . ' has been added.');
                $typeResultat->mergeNewTranslations();
                $this->em->flush();
            }
        }
        $io->success('All types had been added');

        return Command::SUCCESS;
    }
    protected function importElection(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        $slugger = new AsciiSlugger();
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $election = new Election;
                $election->setName($row[1]);
                $election->setSlug((string)$slugger->slug($row[1]));
                $election->setDate(new \DateTime($row[2]));

                $typeElection = $this->typeElectionRepository->findOneBy(['id' => $row[3]]);
                if ($typeElection === null) {
                    $io->error($election->getName() . ' s parent not found, id : ' . $row[3]);
                }
                $election->setIdTypeElection($typeElection);
                $this->em->persist($election);
                $io->text($election->getName() . ' has been added.');
                $this->em->flush();
            }
        }
        $io->success('All types had been added');

        return Command::SUCCESS;
    }
    protected function importResultat(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        $slugger = new AsciiSlugger();
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $resultat = new Resultat;
                if ($row[1] != "NULL")
                    $resultat->setTotalVote($row[1]);
                if ($row[2] != "NULL")
                    $resultat->setPercent($row[2]);
                if ($row[3] != "NULL")
                    $resultat->setNumberSubscriber($row[3]);
                if ($row[4] != "NULL")
                    $resultat->setNumberSeat($row[4]);

                $parti = $this->partiRepository->findOneBy(['id' => $row[5]]);
                if ($parti) {
                    $resultat->setIdParty($parti);
                }
                $election = $this->electionRepository->findOneBy(['id' => $row[5]]);
                if ($election) {
                    $resultat->setIdElection($election);
                }
                $commune = $this->communeRepository->findOneBy(['id' => $row[5]]);
                if ($commune) {
                    $resultat->setIdCommune($commune);
                }
                $canton = $this->cantonRepository->findOneBy(['id' => $row[5]]);
                if ($canton) {
                    $resultat->setIdCanton($canton);
                }
                $arrondissement = $this->arrondissementRepository->findOneBy(['id' => $row[5]]);
                if ($arrondissement) {
                    $resultat->setIdArrondissement($arrondissement);
                }
                $province = $this->provinceRepository->findOneBy(['id' => $row[5]]);
                if ($province) {
                    $resultat->setIdProvince($province);
                }
                $region = $this->regionRepository->findOneBy(['id' => $row[5]]);
                if ($region) {
                    $resultat->setIdRegion($region);
                }
                $this->em->persist($resultat);
                $io->text($resultat->getId() . ' has been added.');
                $this->em->flush();
            }
        }
        $io->success('All types had been added');

        return Command::SUCCESS;
    }
    protected function importParti(string $filename, InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = new SplFileObject($filename);
        $file->setFlags(\SplFileObject::READ_CSV | \SplFileObject::SKIP_EMPTY | \SplFileObject::DROP_NEW_LINE);
        $file->setCsvControl(',', '"');
        $slugger = new AsciiSlugger();
        foreach ($file as $key => $row) {
            if ($key == 0) {
                continue;
            }
            if ($row) {
                $parti = new Parti;
                $parti->setName($row[1]);
                $parti->setSlug((string)$slugger->slug($row[1]));

                $this->em->persist($parti);
                $io->text($parti->getName() . ' has been added.');
                $this->em->flush();
            }
        }
        $io->success('All types had been added');

        return Command::SUCCESS;
    }
}
