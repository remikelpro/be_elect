<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250505153528 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE arrondissement_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_7277C2C72C2AC5D3 (translatable_id), UNIQUE INDEX arrondissement_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE article_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_2EEA2F082C2AC5D3 (translatable_id), UNIQUE INDEX article_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE canton_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_B4AB5E1E2C2AC5D3 (translatable_id), UNIQUE INDEX canton_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE commune_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_A276643D2C2AC5D3 (translatable_id), UNIQUE INDEX commune_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE page (id INT AUTO_INCREMENT NOT NULL, id_parent_id INT DEFAULT NULL, position INT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', updated_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', show_in_menu TINYINT(1) DEFAULT NULL, INDEX IDX_140AB620F24F7657 (id_parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE page_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_A3D51B1D2C2AC5D3 (translatable_id), UNIQUE INDEX page_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE parti_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, description LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_7F0C95F32C2AC5D3 (translatable_id), UNIQUE INDEX parti_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE province_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_274F5EBF2C2AC5D3 (translatable_id), UNIQUE INDEX province_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE region_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_634570B52C2AC5D3 (translatable_id), UNIQUE INDEX region_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE type_election_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_65F9EFFE2C2AC5D3 (translatable_id), UNIQUE INDEX type_election_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE type_resultat_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_421968932C2AC5D3 (translatable_id), UNIQUE INDEX type_resultat_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE arrondissement_translation ADD CONSTRAINT FK_7277C2C72C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES arrondissement (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article_translation ADD CONSTRAINT FK_2EEA2F082C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES article (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canton_translation ADD CONSTRAINT FK_B4AB5E1E2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES canton (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE commune_translation ADD CONSTRAINT FK_A276643D2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES commune (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE page ADD CONSTRAINT FK_140AB620F24F7657 FOREIGN KEY (id_parent_id) REFERENCES page (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE page_translation ADD CONSTRAINT FK_A3D51B1D2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES page (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_translation ADD CONSTRAINT FK_7F0C95F32C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES parti (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province_translation ADD CONSTRAINT FK_274F5EBF2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES province (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region_translation ADD CONSTRAINT FK_634570B52C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES region (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election_translation ADD CONSTRAINT FK_65F9EFFE2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES type_election (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat_translation ADD CONSTRAINT FK_421968932C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES type_resultat (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE arrondissement DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article DROP title_fr, DROP title_nl, DROP content_fr, DROP content_nl, DROP title
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canton DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE commune DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti DROP description_fr, DROP description_nl, DROP description_en
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election DROP name_fr, DROP name_nl, DROP description_fr, DROP description_nl, DROP description_en, DROP name_en, DROP slug_fr, DROP slug_nl, DROP slug_en
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat DROP name_fr, DROP name_nl
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE arrondissement_translation DROP FOREIGN KEY FK_7277C2C72C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article_translation DROP FOREIGN KEY FK_2EEA2F082C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canton_translation DROP FOREIGN KEY FK_B4AB5E1E2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE commune_translation DROP FOREIGN KEY FK_A276643D2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE page DROP FOREIGN KEY FK_140AB620F24F7657
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE page_translation DROP FOREIGN KEY FK_A3D51B1D2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti_translation DROP FOREIGN KEY FK_7F0C95F32C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province_translation DROP FOREIGN KEY FK_274F5EBF2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region_translation DROP FOREIGN KEY FK_634570B52C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election_translation DROP FOREIGN KEY FK_65F9EFFE2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat_translation DROP FOREIGN KEY FK_421968932C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE arrondissement_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE article_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE canton_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE commune_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE page
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE page_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE parti_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE province_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE region_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE type_election_translation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE type_resultat_translation
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE arrondissement ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article ADD title_fr VARCHAR(255) DEFAULT NULL, ADD title_nl VARCHAR(255) DEFAULT NULL, ADD content_fr LONGTEXT DEFAULT NULL, ADD content_nl LONGTEXT DEFAULT NULL, ADD title VARCHAR(255) DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canton ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE commune ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE parti ADD description_fr LONGTEXT DEFAULT NULL, ADD description_nl LONGTEXT DEFAULT NULL, ADD description_en LONGTEXT DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL, ADD description_fr LONGTEXT DEFAULT NULL, ADD description_nl LONGTEXT DEFAULT NULL, ADD description_en LONGTEXT DEFAULT NULL, ADD name_en VARCHAR(255) NOT NULL, ADD slug_fr VARCHAR(255) NOT NULL, ADD slug_nl VARCHAR(255) NOT NULL, ADD slug_en VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
    }
}
