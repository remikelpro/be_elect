<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221201123006 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE arrondissement (id INT AUTO_INCREMENT NOT NULL, id_province_id INT NOT NULL, name_fr VARCHAR(255) NOT NULL, name_nl VARCHAR(255) NOT NULL, INDEX IDX_3A3B64C4F154DCBD (id_province_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, content LONGTEXT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE canton (id INT AUTO_INCREMENT NOT NULL, id_arrondissement_id INT NOT NULL, name_fr VARCHAR(255) NOT NULL, name_nl VARCHAR(255) NOT NULL, INDEX IDX_5B9EF921B14AD406 (id_arrondissement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commune (id INT AUTO_INCREMENT NOT NULL, id_canton_id INT NOT NULL, name_fr VARCHAR(255) NOT NULL, name_nl VARCHAR(255) NOT NULL, INDEX IDX_E2E2D1EED32B12C (id_canton_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE election (id INT AUTO_INCREMENT NOT NULL, id_type_election_id INT NOT NULL, name VARCHAR(255) NOT NULL, date DATE NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_DCA03800F9B58BF (id_type_election_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE parti (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, logo VARCHAR(255) DEFAULT NULL, color VARCHAR(255) DEFAULT NULL, colog_bg VARCHAR(255) DEFAULT NULL, president VARCHAR(255) DEFAULT NULL, description_fr LONGTEXT DEFAULT NULL, description_nl VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE province (id INT AUTO_INCREMENT NOT NULL, id_region_id INT NOT NULL, name_fr VARCHAR(255) NOT NULL, name_nl VARCHAR(255) NOT NULL, INDEX IDX_4ADAD40B1813BD72 (id_region_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE region (id INT AUTO_INCREMENT NOT NULL, name_fr VARCHAR(255) NOT NULL, name_nl VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE resultat (id INT AUTO_INCREMENT NOT NULL, id_party_id INT DEFAULT NULL, id_election_id INT DEFAULT NULL, id_commune_id INT DEFAULT NULL, id_canton_id INT DEFAULT NULL, id_arrondissement_id INT DEFAULT NULL, id_province_id INT DEFAULT NULL, id_region_id INT DEFAULT NULL, id_type_resultat_id INT DEFAULT NULL, number_ballot INT DEFAULT NULL, percent DOUBLE PRECISION DEFAULT NULL, number_subscriber INT DEFAULT NULL, number_seat INT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_E7DB5DE271E7FCCC (id_party_id), INDEX IDX_E7DB5DE2BF1A1708 (id_election_id), INDEX IDX_E7DB5DE2B690CFA5 (id_commune_id), INDEX IDX_E7DB5DE2D32B12C (id_canton_id), INDEX IDX_E7DB5DE2B14AD406 (id_arrondissement_id), INDEX IDX_E7DB5DE2F154DCBD (id_province_id), INDEX IDX_E7DB5DE21813BD72 (id_region_id), INDEX IDX_E7DB5DE27AA06B1C (id_type_resultat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE setting (id INT AUTO_INCREMENT NOT NULL, twitter VARCHAR(255) DEFAULT NULL, facebook VARCHAR(255) DEFAULT NULL, contact_email VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_election (id INT AUTO_INCREMENT NOT NULL, name_fr VARCHAR(255) NOT NULL, name_nl VARCHAR(255) NOT NULL, description_fr LONGTEXT DEFAULT NULL, description_nl LONGTEXT DEFAULT NULL, logo VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_resultat (id INT AUTO_INCREMENT NOT NULL, name_fr VARCHAR(255) NOT NULL, name_nl VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE arrondissement ADD CONSTRAINT FK_3A3B64C4F154DCBD FOREIGN KEY (id_province_id) REFERENCES province (id)');
        $this->addSql('ALTER TABLE canton ADD CONSTRAINT FK_5B9EF921B14AD406 FOREIGN KEY (id_arrondissement_id) REFERENCES arrondissement (id)');
        $this->addSql('ALTER TABLE commune ADD CONSTRAINT FK_E2E2D1EED32B12C FOREIGN KEY (id_canton_id) REFERENCES canton (id)');
        $this->addSql('ALTER TABLE election ADD CONSTRAINT FK_DCA03800F9B58BF FOREIGN KEY (id_type_election_id) REFERENCES type_election (id)');
        $this->addSql('ALTER TABLE province ADD CONSTRAINT FK_4ADAD40B1813BD72 FOREIGN KEY (id_region_id) REFERENCES region (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE271E7FCCC FOREIGN KEY (id_party_id) REFERENCES parti (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE2BF1A1708 FOREIGN KEY (id_election_id) REFERENCES election (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE2B690CFA5 FOREIGN KEY (id_commune_id) REFERENCES commune (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE2D32B12C FOREIGN KEY (id_canton_id) REFERENCES canton (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE2B14AD406 FOREIGN KEY (id_arrondissement_id) REFERENCES arrondissement (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE2F154DCBD FOREIGN KEY (id_province_id) REFERENCES province (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE21813BD72 FOREIGN KEY (id_region_id) REFERENCES region (id)');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE27AA06B1C FOREIGN KEY (id_type_resultat_id) REFERENCES type_resultat (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE arrondissement DROP FOREIGN KEY FK_3A3B64C4F154DCBD');
        $this->addSql('ALTER TABLE canton DROP FOREIGN KEY FK_5B9EF921B14AD406');
        $this->addSql('ALTER TABLE commune DROP FOREIGN KEY FK_E2E2D1EED32B12C');
        $this->addSql('ALTER TABLE election DROP FOREIGN KEY FK_DCA03800F9B58BF');
        $this->addSql('ALTER TABLE province DROP FOREIGN KEY FK_4ADAD40B1813BD72');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE271E7FCCC');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE2BF1A1708');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE2B690CFA5');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE2D32B12C');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE2B14AD406');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE2F154DCBD');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE21813BD72');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE27AA06B1C');
        $this->addSql('DROP TABLE arrondissement');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE canton');
        $this->addSql('DROP TABLE commune');
        $this->addSql('DROP TABLE election');
        $this->addSql('DROP TABLE parti');
        $this->addSql('DROP TABLE province');
        $this->addSql('DROP TABLE region');
        $this->addSql('DROP TABLE resultat');
        $this->addSql('DROP TABLE setting');
        $this->addSql('DROP TABLE type_election');
        $this->addSql('DROP TABLE type_resultat');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
