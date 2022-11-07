<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221107093114 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE partis');
        $this->addSql('DROP TABLE provinces');
        $this->addSql('DROP TABLE elections');
        $this->addSql('DROP TABLE region');
        $this->addSql('DROP TABLE communes');
        $this->addSql('DROP TABLE resultats');
        $this->addSql('DROP TABLE types_elections');
        $this->addSql('DROP TABLE cantons');
        $this->addSql('DROP TABLE types_resultats');
        $this->addSql('DROP TABLE arrondissements');
        $this->addSql('ALTER TABLE regions MODIFY id_region INT NOT NULL');
        $this->addSql('DROP INDEX `primary` ON regions');
        $this->addSql('ALTER TABLE regions CHANGE id_region id INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE regions ADD PRIMARY KEY (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE partis (id_parti INT AUTO_INCREMENT NOT NULL, pa_nom VARCHAR(255) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_general_ci`, PRIMARY KEY(id_parti)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE provinces (id_province INT AUTO_INCREMENT NOT NULL, pr_nom_fr VARCHAR(65) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_general_ci`, pr_nom_nl VARCHAR(65) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_general_ci`, fk_region INT NOT NULL, INDEX fk_region (fk_region), PRIMARY KEY(id_province)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE elections (id_election INT AUTO_INCREMENT NOT NULL, el_nom VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, el_date DATE DEFAULT NULL, fk_type_election INT DEFAULT NULL, INDEX fk_type_election (fk_type_election), PRIMARY KEY(id_election)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE region (id INT AUTO_INCREMENT NOT NULL, re_nom_fr VARCHAR(23) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, re_nom_nl VARCHAR(16) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE communes (id_commune INT AUTO_INCREMENT NOT NULL, co_nom_fr VARCHAR(26) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, co_nom_nl VARCHAR(26) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, fk_canton INT DEFAULT NULL, INDEX commune_ca (fk_canton), PRIMARY KEY(id_commune)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE resultats (id_resultat INT AUTO_INCREMENT NOT NULL, nombre_bulletin INT DEFAULT NULL, pourcentage DOUBLE PRECISION DEFAULT NULL, nombre_inscrit INT DEFAULT NULL, nombre_siege INT DEFAULT NULL, fk_parti INT NOT NULL, fk_election INT NOT NULL, fk_type_election INT NOT NULL, fk_commune INT DEFAULT NULL, fk_canton INT DEFAULT NULL, fk_arrondissement INT DEFAULT NULL, fk_provinvce INT DEFAULT NULL, fk_region INT DEFAULT NULL, INDEX resultat_re (fk_region), INDEX resultat_pr (fk_provinvce), INDEX resultat_pa (fk_parti), INDEX resultat_el (fk_election), INDEX resultat_co (fk_commune), INDEX resultat_ar (fk_arrondissement), INDEX resultats_ty (fk_type_election), PRIMARY KEY(id_resultat)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE types_elections (id_type_election INT AUTO_INCREMENT NOT NULL, ty_nom_fr VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, ty_nom_nl VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, INDEX id_type_election_2 (id_type_election), INDEX id_type_election (id_type_election), PRIMARY KEY(id_type_election)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE cantons (id_canton INT AUTO_INCREMENT NOT NULL, ca_nom_fr VARCHAR(65) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, ca_nom_nl VARCHAR(65) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, fk_arrondissement INT DEFAULT NULL, INDEX fk_entite (fk_arrondissement), PRIMARY KEY(id_canton)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE types_resultats (id_type_resultat INT AUTO_INCREMENT NOT NULL, type_resultat VARCHAR(11) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, UNIQUE INDEX id_type_resultat (id_type_resultat), PRIMARY KEY(id_type_resultat)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE arrondissements (id_arrondissement INT AUTO_INCREMENT NOT NULL, ar_nom_fr VARCHAR(65) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, ar_nom_nl VARCHAR(65) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_general_ci`, fk_province INT DEFAULT NULL, INDEX arrondissements_province (fk_province), PRIMARY KEY(id_arrondissement)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE regions MODIFY id INT NOT NULL');
        $this->addSql('DROP INDEX `PRIMARY` ON regions');
        $this->addSql('ALTER TABLE regions CHANGE id id_region INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE regions ADD PRIMARY KEY (id_region)');
    }
}
