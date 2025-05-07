<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250506154434 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE government_parti DROP FOREIGN KEY FK_B5649513F55836AA
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE government_parti DROP FOREIGN KEY FK_B5649513712547C6
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE leader DROP FOREIGN KEY FK_F5E3EAD7712547C6
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE member DROP FOREIGN KEY FK_70E4FA78712547C6
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_history DROP FOREIGN KEY FK_998BAD11712547C6
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_history_translation DROP FOREIGN KEY FK_3F53A7DE2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_name DROP FOREIGN KEY FK_4256BD4E712547C6
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_name_translation DROP FOREIGN KEY FK_E3F77D752C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resource DROP FOREIGN KEY FK_BC91F41621FEAB53
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resource DROP FOREIGN KEY FK_BC91F416BF1A1708
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resource_translation DROP FOREIGN KEY FK_B0D27B3D2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat_parti DROP FOREIGN KEY FK_D8EDFB56712547C6
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat_parti DROP FOREIGN KEY FK_D8EDFB56D233E95C
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE candidat
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE government
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE government_parti
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE leader
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE member
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE parti_history
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE parti_history_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE parti_name
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE parti_name_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE resource
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE resource_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE resultat_parti
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti ADD president VARCHAR(255) DEFAULT NULL, DROP acronym, DROP federal, DROP place, DROP twitter, DROP facebook, DROP instagram, DROP website, DROP tiktok, CHANGE main main TINYINT(1) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_translation DROP about
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat ADD id_party_id INT DEFAULT NULL, ADD number_ballot INT DEFAULT NULL, DROP total_vote, DROP head_vote, DROP titular_vote, DROP alternate_vote, DROP blank_vote, DROP eligible_voters
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE271E7FCCC FOREIGN KEY (id_party_id) REFERENCES parti (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E7DB5DE271E7FCCC ON resultat (id_party_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE messenger_messages CHANGE created_at created_at DATETIME NOT NULL, CHANGE available_at available_at DATETIME NOT NULL, CHANGE delivered_at delivered_at DATETIME DEFAULT NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE candidat (id INT AUTO_INCREMENT NOT NULL, full_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, number_on_list INT DEFAULT NULL, number_of_vote INT DEFAULT NULL, ballots_alloted_for_eligibility INT DEFAULT NULL, votes_obtained_after_devolution INT DEFAULT NULL, ballots_remaining_for_distribution INT DEFAULT NULL, candidate_order INT DEFAULT NULL, is_successor TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE government (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, firstname VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, lastname VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, position_open VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, position_closed VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, position_rec INT DEFAULT NULL, gender SMALLINT DEFAULT NULL, prime_minister VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, government_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, legislature_year INT DEFAULT NULL, government_year INT DEFAULT NULL, total_minister INT DEFAULT NULL, total_secretary INT DEFAULT NULL, type SMALLINT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE government_parti (id INT AUTO_INCREMENT NOT NULL, parti_id INT DEFAULT NULL, government_id INT DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, main TINYINT(1) DEFAULT NULL, UNIQUE INDEX UNIQ_B5649513712547C6 (parti_id), UNIQUE INDEX UNIQ_B5649513F55836AA (government_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE leader (id INT AUTO_INCREMENT NOT NULL, parti_id INT DEFAULT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, selection SMALLINT DEFAULT NULL, score DOUBLE PRECISION DEFAULT NULL, n_candidate INT DEFAULT NULL, mandat_start DATE DEFAULT NULL, mandat_end DATE DEFAULT NULL, reason_end SMALLINT DEFAULT NULL, INDEX IDX_F5E3EAD7712547C6 (parti_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE member (id INT AUTO_INCREMENT NOT NULL, parti_id INT NOT NULL, year INT DEFAULT NULL, number INT DEFAULT NULL, INDEX IDX_70E4FA78712547C6 (parti_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE parti_history (id INT AUTO_INCREMENT NOT NULL, parti_id INT DEFAULT NULL, year INT DEFAULT NULL, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_998BAD11712547C6 (parti_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE parti_history_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, locale VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX parti_history_translation_unique_translation (translatable_id, locale), INDEX IDX_3F53A7DE2C2AC5D3 (translatable_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE parti_name (id INT AUTO_INCREMENT NOT NULL, parti_id INT DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, main TINYINT(1) NOT NULL, INDEX IDX_4256BD4E712547C6 (parti_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE parti_name_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, locale VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX parti_name_translation_unique_translation (translatable_id, locale), INDEX IDX_E3F77D752C2AC5D3 (translatable_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE resource (id INT AUTO_INCREMENT NOT NULL, id_parti_id INT DEFAULT NULL, id_election_id INT DEFAULT NULL, file VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, date DATE DEFAULT NULL, type SMALLINT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', updated_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', INDEX IDX_BC91F41621FEAB53 (id_parti_id), INDEX IDX_BC91F416BF1A1708 (id_election_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE resource_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, slug VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, locale VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX resource_translation_unique_translation (translatable_id, locale), INDEX IDX_B0D27B3D2C2AC5D3 (translatable_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE resultat_parti (resultat_id INT NOT NULL, parti_id INT NOT NULL, INDEX IDX_D8EDFB56D233E95C (resultat_id), INDEX IDX_D8EDFB56712547C6 (parti_id), PRIMARY KEY(resultat_id, parti_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE government_parti ADD CONSTRAINT FK_B5649513F55836AA FOREIGN KEY (government_id) REFERENCES government (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE government_parti ADD CONSTRAINT FK_B5649513712547C6 FOREIGN KEY (parti_id) REFERENCES parti (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE leader ADD CONSTRAINT FK_F5E3EAD7712547C6 FOREIGN KEY (parti_id) REFERENCES parti (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE member ADD CONSTRAINT FK_70E4FA78712547C6 FOREIGN KEY (parti_id) REFERENCES parti (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_history ADD CONSTRAINT FK_998BAD11712547C6 FOREIGN KEY (parti_id) REFERENCES parti (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_history_translation ADD CONSTRAINT FK_3F53A7DE2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES parti_history (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_name ADD CONSTRAINT FK_4256BD4E712547C6 FOREIGN KEY (parti_id) REFERENCES parti (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_name_translation ADD CONSTRAINT FK_E3F77D752C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES parti_name (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resource ADD CONSTRAINT FK_BC91F41621FEAB53 FOREIGN KEY (id_parti_id) REFERENCES parti (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resource ADD CONSTRAINT FK_BC91F416BF1A1708 FOREIGN KEY (id_election_id) REFERENCES election (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resource_translation ADD CONSTRAINT FK_B0D27B3D2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES resource (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat_parti ADD CONSTRAINT FK_D8EDFB56712547C6 FOREIGN KEY (parti_id) REFERENCES parti (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat_parti ADD CONSTRAINT FK_D8EDFB56D233E95C FOREIGN KEY (resultat_id) REFERENCES resultat (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE messenger_messages CHANGE created_at created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', CHANGE available_at available_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', CHANGE delivered_at delivered_at DATETIME DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti ADD acronym VARCHAR(255) NOT NULL, ADD federal SMALLINT DEFAULT NULL, ADD place SMALLINT DEFAULT NULL, ADD facebook VARCHAR(255) DEFAULT NULL, ADD instagram VARCHAR(255) DEFAULT NULL, ADD website VARCHAR(255) DEFAULT NULL, ADD tiktok VARCHAR(255) DEFAULT NULL, CHANGE main main TINYINT(1) DEFAULT NULL, CHANGE president twitter VARCHAR(255) DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_translation ADD about LONGTEXT DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE271E7FCCC
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_E7DB5DE271E7FCCC ON resultat
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE resultat ADD total_vote INT DEFAULT NULL, ADD head_vote INT DEFAULT NULL, ADD titular_vote INT DEFAULT NULL, ADD alternate_vote INT DEFAULT NULL, ADD blank_vote INT DEFAULT NULL, ADD eligible_voters INT DEFAULT NULL, DROP id_party_id, DROP number_ballot
        SQL);
    }
}
