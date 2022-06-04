(async () => {
    
    const dataBase = require('./db');
    const crud = require('./crud');

    await dataBase.sync();

    // create
    await dataBase.create({

        Nome:"Sequelize 1",
        DateCreated: Date()
    });

    await dataBase.create({

        Nome:"Sequelize 2",
        DateCreated: Date()
    });

    await dataBase.create({

        Nome:"Sequelize 3",
        DateCreated: Date()
    });

    // update
    const update = await crud.findByPk(2); 
    update.Name = "Sequelize altered";
    await update.save();

    // delete
    crud.destroy({where: {Id: 1}});

    // read
    const findCrud = await crud.findByPk(3); 
    console.log(findCrud);

    const findAllCrud = await crud.findAll(); 
    console.log(findAllCrud);
})();