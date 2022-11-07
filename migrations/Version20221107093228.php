<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221107093228 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE regions CHANGE id_region id_region INT AUTO_INCREMENT NOT NULL, ADD PRIMARY KEY (id_region)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE regions MODIFY id_region INT NOT NULL');
        $this->addSql('DROP INDEX `primary` ON regions');
        $this->addSql('ALTER TABLE regions CHANGE id_region id_region INT NOT NULL');
    }
}
