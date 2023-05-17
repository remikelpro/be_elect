<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230514022203 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE candidat (id INT AUTO_INCREMENT NOT NULL, full_name VARCHAR(255) DEFAULT NULL, number_on_list INT DEFAULT NULL, number_of_vote INT DEFAULT NULL, ballots_alloted_for_eligibility INT DEFAULT NULL, votes_obtained_after_devolution INT DEFAULT NULL, ballots_remaining_for_distribution INT DEFAULT NULL, candidate_order INT DEFAULT NULL, is_successor TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE resultat ADD head_vote INT DEFAULT NULL, ADD titular_vote INT DEFAULT NULL, ADD alternate_vote INT DEFAULT NULL, ADD blank_vote INT DEFAULT NULL, CHANGE number_ballot total_vote INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE candidat');
        $this->addSql('ALTER TABLE resultat ADD number_ballot INT DEFAULT NULL, DROP total_vote, DROP head_vote, DROP titular_vote, DROP alternate_vote, DROP blank_vote');
    }
}
