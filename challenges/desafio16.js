db.produtos.updateMany({ nome: "Big Mac" },
    { $set: { ultimaModificacao: "timestamp" } });

    db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });