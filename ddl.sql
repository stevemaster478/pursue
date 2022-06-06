DROP DATABASE IF EXISTS Quiz;
CREATE DATABASE Quiz;
USE Quiz;

CREATE TABLE utente(
    username VARCHAR(30) PRIMARY KEY NOT NULL,
    email VARCHAR(30) NOT NULL,
    pass VARCHAR(30) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE corso(
    tipo VARCHAR(30) PRIMARY KEY NOT NULL
) ENGINE=InnoDB;

CREATE TABLE difficolta(
    diff VARCHAR(30) PRIMARY KEY NOT NULL
) ENGINE=InnoDB;

CREATE TABLE domanda (
  id_domanda int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  domanda varchar(50) NOT NULL,
  fk_corso VARCHAR(30) NOT NULL,
  difficoltaDomanda VARCHAR(30) NOT NULL,
  CONSTRAINT fk FOREIGN KEY (fk_corso) REFERENCES corso(tipo),
  CONSTRAINT fkD FOREIGN KEY (difficoltaDomanda) REFERENCES difficolta(diff)
) ENGINE=InnoDB;

CREATE TABLE risposte(
    id_ris INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    num_domanda INT(11) NOT NULL,
    corretta TINYINT(1) NOT NULL,
    testo VARCHAR(400) NOT NULL,
    fk_corso VARCHAR(30) NOT NULL,
    difficoltaDomanda VARCHAR(30) NOT NULL,
    CONSTRAINT fkRis FOREIGN KEY (fk_corso) REFERENCES corso(tipo),
    CONSTRAINT fkdRis FOREIGN KEY (difficoltaDomanda) REFERENCES difficolta(diff)
) ENGINE=InnoDB;