export const addOrder = async (order) => {
    console.log("adicionando pedido", order, "para o banco de dados");
    await fetch("../api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  };