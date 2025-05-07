<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250505154051 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE page_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_A3D51B1D2C2AC5D3 (translatable_id), UNIQUE INDEX page_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE page_translation ADD CONSTRAINT FK_A3D51B1D2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES page (id) ON DELETE CASCADE
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
            ALTER TABLE parti_translation ADD CONSTRAINT FK_7F0C95F32C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES parti (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province_translation ADD CONSTRAINT FK_274F5EBF2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES province (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region_translation ADD CONSTRAINT FK_634570B52C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES region (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election DROP name_fr, DROP name_nl, DROP description_fr, DROP description_nl, DROP description_en, DROP name_en, DROP slug_fr, DROP slug_nl, DROP slug_en
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election_translation ADD CONSTRAINT FK_65F9EFFE2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES type_election (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat DROP name_fr, DROP name_nl
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat_translation ADD CONSTRAINT FK_421968932C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES type_resultat (id) ON DELETE CASCADE
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE page_translation DROP FOREIGN KEY FK_A3D51B1D2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE page_translation
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
            ALTER TABLE parti_translation DROP FOREIGN KEY FK_7F0C95F32C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE province_translation DROP FOREIGN KEY FK_274F5EBF2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE region_translation DROP FOREIGN KEY FK_634570B52C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL, ADD description_fr LONGTEXT DEFAULT NULL, ADD description_nl LONGTEXT DEFAULT NULL, ADD description_en LONGTEXT DEFAULT NULL, ADD name_en VARCHAR(255) NOT NULL, ADD slug_fr VARCHAR(255) NOT NULL, ADD slug_nl VARCHAR(255) NOT NULL, ADD slug_en VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_election_translation DROP FOREIGN KEY FK_65F9EFFE2C2AC5D3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat ADD name_fr VARCHAR(255) NOT NULL, ADD name_nl VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE type_resultat_translation DROP FOREIGN KEY FK_421968932C2AC5D3
        SQL);
    }
}
