 const Database = require('./db');
 const saveOrphanage = require('./saveOrphanage');

 Database.then(async db => {
   // inserir dados na tabela
    await saveOrphanage(db,  {
      lat: "-27.2189591",
      lng:"-49.6568624",
      name: "lar dos meninos",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
      whatsapp: "84848433",
      images: [
          "https://images.unsplash.com/photo-1574350518720-d92affb18bee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

          "https://images.unsplash.com/photo-1562790519-004d066ea916?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"


      ].toString(),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
      opening_hours:"horário de visitas das 18h até 8h",
      open_on_weekends: "0"
  })

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages" )
  console.log(selectedOrphanages) 

    //consultar somente 1 orphange pelo id
  
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"  ')
    console.log(orphanage)

    /*//deletar dados da tabela
   console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))
   console.log(await db.run("DELETE FROM orphanages WHERE id = '5' "))*/

  
 }) 
 