import express from 'express';
import companiesRouter from './routes/company.routes';
import listingsRouter from './routes/listing.routes';
const app = express()
const port = 3000

app.use(express.json())

app.use("/api/listings",listingsRouter)
app.use("/api/companies",companiesRouter)
app.listen(port)