const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/Auth.routes");
const comboRoute = require("./routes/Combo.routes");
const typeRoute = require("./routes/Type.routes");
const typeComBoRoute = require("./routes/TypeCombo.routes");
const productRoute = require("./routes/Product.routes");
const supplierRoute = require("./routes/Supplier.routes");
const productsupplierRoute = require("./routes/ProductSupplier.routes");
const deliveryRoute = require("./routes/Delivery.routes");
const orderRoute = require("./routes/PurchaseProduct.routes");
const orderComboRoute = require("./routes/OrderCombo.routes");
const maintenanceRoute = require("./routes/Maintenance.routes");
const userRoute = require("./routes/User.routes");
const maintenanceSuppliesRoute = require("./routes/MaintenanceSupplies.routes");
const machinecodeRoute = require("./routes/MachineCode.routes");
const machinelocationRoute = require("./routes/MachineLocation.routes");
const PORT = 8000;
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the MongoDB!");
  })
  .catch((error) => {
    console.log(`Can not connect to database, ${error}`);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/combo", comboRoute);
app.use("/v1/type", typeRoute);
app.use("/v1/typecombo", typeComBoRoute);
app.use("/v1/product", productRoute);
app.use("/v1/supplier", supplierRoute);
app.use("/v1/productsupplier", productsupplierRoute);
app.use("/v1/delivery", deliveryRoute);
app.use("/v1/order", orderRoute);
app.use("/v1/ordercombo", orderComboRoute);
app.use("/v1/maintenance", maintenanceRoute);
app.use("/v1/user", userRoute);
app.use("/v1/maintenancesupplies", maintenanceSuppliesRoute);
app.use("/v1/machinecode", machinecodeRoute);
app.use("/v1/machinelocation", machinelocationRoute);

app.listen(8000, () => {
  console.log(`Server is runing port ${PORT}`);
});
