// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Cos’e' il defacing di una pagina web?",
    answer: "E' un attacco che ripiazza il contenuto di un sito in modo indesiderato",
    options: [
      "La tecnica di IP-Spoofing",
      "E' un attacco che ripiazza il contenuto di un sito in modo indesiderato",
      "E' un software audio",
      "E' una tecnica di DDoS"
    ]
  },
    {
    numb: 2,
      question: "Chi e' uno degli autori di Parrot OS?",
      answer: "Lorenzo Faletra (A.K.A. palinuro)",
    options: [
      "Lorenzo Faletra (A.K.A. palinuro)",
      "Il Cippe",
      "Monitor (A.K.A. eschimese)",
      "Dario Moccia (A.K.A. l'etrusco)"
    ]
  },
    {
    numb: 3,
      question: "Cos’e' un payload?",
      answer: "Nei Malware il payload e' il carico trasportato da strumenti di compromissione del sistema",
    options: [
      "Nei Malware il payload e' il carico trasportato da strumenti di compromissione del sistema",
      "Nella rete il payload e' l'handshake tra client e server",
      "Nei Malware il payload e' un trojan",
      "Nei Malware il payload e' un ransomware"
    ]
  },
    {
    numb: 4,
      question: "In cosa consiste il tunneling con SOCKS?",
    answer: "Un server SOCKS e' un particolare tipo di proxy che permette di effettuare connessioni TCP dirette tra computer su due reti IP differenti nei casi in cui un instradamento diretto non sia disponibile",
    options: [
      "E' uno sviluppo hardware della NIC (Scheda di rete)",
      "Il tunneling con SOCKetS e' un particolare modo di sfruttare la connessione per mandare dati integri",
      "Un server SOCKS e' un particolare tipo di proxy che permette di effettuare connessioni TCP dirette tra computer su due reti IP differenti nei casi in cui un instradamento diretto non sia disponibile",
      "E' un attacco di tipo MITM (Man in the Middle)"
    ]
  },
    {
    numb: 5,
      question: "In cosa consiste il tunneling con SSH?",
      answer: "Il tunneling SSH e' un meccanismo che permette di fare il forwarding di porte fra client e server",
    options: [
      "Il tunneling SSH e' la creazione di rete privata",
      "Il tunneling SSH e' la modifica di una rete pubblica",
      "Il tunneling SSH e' duplicazione della rete pubblica",
      "Il tunneling SSH e' un meccanismo che permette di fare il forwarding di porte fra client e server"
    ]
  },
  {
    numb: 6,
    question: "In cosa consiste l’attacco watering hole?",
    answer: "Il watering hole e' una tecnica che va ad infettare gli utenti finali spargendo virus nei siti web",
    options: [
      "Il watering hole e' una tecnica che va ad infettare gli utenti finali spargendo virus nei PC",
      "Il watering hole e' una tecnica che va ad infettare gli utenti finali spargendo virus nell'hardware",
      "Il watering hole e' una tecnica che va ad infettare gli utenti finali spargendo virus nei siti web",
      "Il watering hole e' una tecnica che va ad infettare gli utenti finali spargendo virus nelle applicazioni"
    ]
  },
  {
    numb: 7,
    question: "In cosa consiste il pharming?",
    answer: "Il pharming manipola il traffico di un applicazione e le informazioni confidenziali vengono rubate",
    options: [
      "Il pharming manipola il traffico di un sito e le informazioni confidenziali vengono rubate",
      "Il pharming manipola il traffico di un applicazione e le informazioni confidenziali vengono rubate",
      "Il pharming manipola la comunicazione di dati di un componente hardware e le informazioni confidenziali vengono rubate",
      "Il pharming e' sinonimo di phishing"
    ]
  },
  {
    numb: 8,
    question: "In cosa consiste il farmjacking?",
    answer: "E' un tipo di attacco dove i malintenzionati iniettano codice javascript dannoso in una pagina web",
    options: [
      "E' un tipo di attacco dove i malintenzionati iniettano codice javascript dannoso in una pagina web",
      "E' un tipo di attacco dove i malintenzionati fanno la sql injection a diversi siti web",
      "E' un attacco DDoS",
      "E' un tipo di attacco che va a colpire gli utenti finali in modo tale da rubare loro le carte di credito"
    ]
  },
  {
    numb: 9,
    question: "In cosa consiste il smishing?",
    answer: "Un attacco di tipo Social Engineering che va a colpire gli utenti utilizzando i social media",
    options: [
      "Un attacco di tipo Social Engineering che va a colpire i server",
      "Un attacco di tipo Social Engineering che va a colpire gli utenti utilizzando i social media",
      "Un attacco di tipo Social Engineering che va a colpire l'hardware",
      "Un attacco di tipo Social Engineering che crea un social network fittizio"
    ]
  },
  {
    numb: 10,
    question: "Cos’e' Advanced Persistent Threat?",
    answer: "E' un tipo di attacco che serve ad ottenere accesso ad un sistema",
    options: [
      "E' un tipo di attacco che serve ad effettuare l'infezione degli usernet, facendoli diventare dei botnet",
      "E' un tipo di attacco che serve ad individuare i pacchetti trasmessi in una rete",
      "E' un tipo di attacco che serve ad ottenere il controllo delle periferiche in remoto",
      "E' un tipo di attacco che serve ad ottenere accesso ad un sistema"
    ]
  },
  {
    numb: 11,
    question: "Qual e' la differenza tra IPTV e CCCAM?",
    answer: "La CCcam trasmette in diretta senza ritardi perche' si limita a decrittografare i pacchetti , mentre l'IPTV ha un ritardo che va da 5-60 secondi ma trasmette in qualita' massima",
    options: [
      "La CCcam trasmette in diretta senza ritardi perche' si limita a decrittografare i pacchetti , mentre l'IPTV ha un ritardo che va da 5-60 secondi ma trasmette in qualita' massima",
      "L'IPTV trasmette in diretta senza ritardi perche' si limita a decrittografare i pacchetti , mentre la CCcam ha un ritardo che va da 5-60 secondi ma trasmette in qualita' massima",
      "La CCcam e' piu' costosa dell'IPTV",
      "L'IPTV e' piu' veloce della CCcam"
    ]
  },
  {
    numb: 12,
    question: "Come si effettua un MAC Spoofing?",
    answer: "Su Windows si puo' cambiare andando sul pannello di controllo",
    options: [
      "Su Windows si puo' cambiare andando sulle impostazioni dello store",
      "Su Windows si puo' cambiare andando sul pannello di controllo",
      "Su Windows non si puo' cambiare",
      "Su Windows si puo' cambiare resettare rimuovendo e rimettendo la batteria CMOS"
    ]
  },
  {
    numb: 13,
    question: "A cosa serve una backdoor?",
    answer: "Una backdoor serve a permettere l'accesso di un malintenzionato in remoto",
    options: [
      "Una backdoor serve a permettere l'accesso di un malintenzionato in locale",
      "Una backdoor serve a negare l'accesso di un malintenzionato in remoto",
      "Una backdoor serve a permettere l'accesso di un malintenzionato in remoto",
      "Una backdoor serve a negare l'accesso di un malintenzionato in locale"
    ]
  },
  {
    numb: 14,
    question: "A cosa serve il progetto Cloud_enum?",
    answer: "E' uno strumento OSINT (Open Source Intelligence) per enumerare le risorse pubbliche in diversi cloud",
    options: [
      "E' uno strumento OSINT (Open Source Intelligence) per enumerare le risorse pubbliche in diversi cloud",
      "E' uno strumento OSINT (Open Source Intelligence) per enumerare le risorse private in diversi cloud","Sicurezza",
      "E' uno strumento OSINT (Open Source Intelligence) per enumerare le risorse pubbliche nelle reti private",
      "E' uno strumento OSINT (Open Source Intelligence) per enumerare le risorse pubbliche nelle reti accessibili a tutti"
    ]
  },
  {
    numb: 15,
    question: "Quale tool tra questi viene utilizzato per fare Password Spraying?",
    answer: "MSOLSpray",
    options: [
      "MSOLShare",
      "MSOLStore",
      "MSOLString",
      "MSOLSpray"
    ]
  },
];