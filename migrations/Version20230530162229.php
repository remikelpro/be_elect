<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230530162229 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE resultat_parti (resultat_id INT NOT NULL, parti_id INT NOT NULL, INDEX IDX_D8EDFB56D233E95C (resultat_id), INDEX IDX_D8EDFB56712547C6 (parti_id), PRIMARY KEY(resultat_id, parti_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE resultat_parti ADD CONSTRAINT FK_D8EDFB56D233E95C FOREIGN KEY (resultat_id) REFERENCES resultat (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE resultat_parti ADD CONSTRAINT FK_D8EDFB56712547C6 FOREIGN KEY (parti_id) REFERENCES parti (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE resultat DROP FOREIGN KEY FK_E7DB5DE271E7FCCC');
        $this->addSql('DROP INDEX IDX_E7DB5DE271E7FCCC ON resultat');
        $this->addSql('ALTER TABLE resultat DROP id_party_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE resultat_parti DROP FOREIGN KEY FK_D8EDFB56D233E95C');
        $this->addSql('ALTER TABLE resultat_parti DROP FOREIGN KEY FK_D8EDFB56712547C6');
        $this->addSql('DROP TABLE resultat_parti');
        $this->addSql('ALTER TABLE resultat ADD id_party_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE resultat ADD CONSTRAINT FK_E7DB5DE271E7FCCC FOREIGN KEY (id_party_id) REFERENCES parti (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_E7DB5DE271E7FCCC ON resultat (id_party_id)');
    }
}
