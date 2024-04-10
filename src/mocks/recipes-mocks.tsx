

const RECIPES = [
    {
        _id: 1,
        title: 'Jujutsu Kaisen 0 - The Movie',
        description: "Da quando la sua amica d'infanzia Rika è morta in un incidente stradale, Yuuta Okkotsu è perseguitato dal suo fantasma. Purtroppo però, non si tratta più della dolce ragazza che conosceva un tempo, ma di uno spirito vendicativo e assetato di sangue; il ragazzo non riesce in alcun modo a tenere a freno la sua crudeltà, e per evitare di fare del male ad altre persone, decide di isolarsi dal mondo. Ma lo stregone Satoru Gojo ha altri piani in mente per lui: se Yuuta frequenterà l'istituto di arti occulte potrà imparare a controllare Rika e combattere al contempo gli esseri maligni.",
        image: './assets/images/jujutsu-kaisen-0.jpeg',
        difficulty: 7/10,
        date: '10/05/2022',
        published: true
      },
      {
        _id: 2,
        title: 'Spy x Family',
        description:"Twilight, una delle migliori spie al mondo, ha trascorso la vita ad affrontare missioni sotto copertura per rendere il mondo un posto migliore. Un giorno però riceve un compito particolarmente difficile, per riuscire nella sua nuova missione dovrà formare una famiglia temporanea e iniziare una nuova vita!",
        image: "./assets/images/SPY-x-FAMILY-2_Portada.jpeg",
        difficulty: 7.5/10,
        date: '12/05/2022',
        published: true
      },
      {
        _id: 3,
        title: 'Solo Leveling',
        description:"Il Gate, un misterioso portale che collega il mondo umano a quello di terribili mostri, mette a rischio la vita degli esseri umani. Delle persone con particolari poteri, gli hunter, combattono per contrastarli. Sung Jinwoo è molto debole, senza particolari abilità, ed è schedato come hunter di livello E. Nonostante questo, cerca di fare del suo meglio per portare avanti il suo compito e pagare le spese mediche della madre? Ma un giorno, a seguito di un inspiegabile evento, Jinwoo comincia a sviluppare i suoi poteri? Che possa diventare un imbattibile hunter di livello S",
        image: './assets/images/sololeveling.jpeg',
        difficulty: 8.5/10,
        date: '18/05/2022',
        published: true
      },
      {
        _id: 4,
        title: 'Kimetsu No Yaiba / Deamon Slayer',
        description: "Tanjiro è il primogenito di una famiglia che ha perso il padre. Un giorno, visita un'altra città per vendere carbone ma finisce col passare la notte lì, invece di tornare a casa, per via di una voce riguardante un demone che di notte vaga per una montagna lì vicino. Quando torna a casa il giorno seguente, ad attenderlo ci sarà una tragedia.",
        image: "./assets/images/portada-kimetsu-220.webp",
        difficulty: 8/10,
        date: '20/06/2022',
        published: true
      },
      {
        _id: 5,
        title: 'Bleach',
        description:"Ichigo Kurosaki è un giovane dotato dell'abilità di vedere gli spiriti. La sua vita subisce un drastico cambiamento quando una shinigami di nome Rukia Kuchiki, incrocia il suo cammino in cerca di un Hollow. Durante lo scontro con lo spirito Rukia rimane gravemente ferita ed è costretta a trasferire parte dei suoi poteri ad Ichigo, che accetta la proposta della shinigami nel tentativo di proteggere i suoi familiari. Tuttavia, durante il processo di trasferimento, qualcosa va storto ed Ichigo assorbe tutti i poteri di Rukia, diventando uno shinigami a pieno titolo. ",
        image: './assets/images/Bleach.jpeg',
        difficulty: 8/10,
        date: '20/07/2022',
        published: true
      },
      {
        _id: 6,
        title: 'Tiramisu',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        image: 'https://www.giallozafferano.it/images/237-23742/Tiramisu_450x300.jpg',
        difficulty: 2,
        date: '25/07/2022',
        published: true
      },
      {
        _id: 7,
        title: 'Bucatini alla Amatriciana',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        image: 'https://www.ricettedalmondo.it/images/foto-ricette/b/122-bucatini-alla-amatriciana.jpg',
        difficulty: 2,
        date: '27/07/2022',
        published: true
      },
      {
        _id: 8,
        title: 'Lasagna',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        image: 'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/03/migliori-ricette-di-lasagne-1200x675.jpg',
        difficulty: 2,
        date: '30/07/2022',
        published: true
      },
      {
        _id: 9,
        title: 'Pizza ai 4 formaggi',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        image: 'https://wips.plug.it/cips/buonissimo.org/cms/2012/12/10798952_l.jpg',
        difficulty: 4,
        date: '20/07/2022',
        published: true
      },
      {
        _id: 10,
        title: 'Panna cotta',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        image: 'https://www.giallozafferano.it/images/237-23742/Tiramisu_450x300.jpg',
        difficulty: 2,
        date: '25/07/2022',
        published: true
      },
      {
        _id: 11,
        title: 'Spaghetti alla carbonara',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        image: 'https://www.ricettedalmondo.it/images/foto-ricette/b/122-bucatini-alla-amatriciana.jpg',
        difficulty: 2,
        date: '27/07/2022',
        published: true
      },
      {
        _id: 12,
        title: "Lasagna",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
        image: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/03/migliori-ricette-di-lasagne-1200x675.jpg",
        difficulty: 3,
        date: '29/07/2022',
        published: true
      },
      {
        _id: 13,
        title: "Panna cotta ai frutti di bosco",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
        image: "https://primochef.it/wp-content/uploads/2022/06/SH_panna_cotta_ai_frutti_di_bosco.jpg",
        difficulty: 2,
        date: '29/08/2022',
        published: true
      },
      {
        _id: 14,
        title: "Spaghetti alla carbonara",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r_idiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tinc_idunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem. Maecenas nec odio et ante tinc_idunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tinc_idunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
        image: "https://blog.giallozafferano.it/paola67/wp-content/uploads/2020/04/Spaghetti-alla-carbonara-720x480.jpg",
        difficulty: 5,
        date: '30/08/2022',
        published: true
      }
    ]

    export default RECIPES;
