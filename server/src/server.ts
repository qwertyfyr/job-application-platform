import express from 'express';
import companiesRouter from './routes/company.routes';
import listingsRouter from './routes/listing.routes';
import interviewsRouter from './routes/interview.routes';
const app = express()
const port = 3000

app.use(express.json())
app.use("/api/listings",listingsRouter)
app.use("/api/companies/",companiesRouter)
app.use("/api/interviews", interviewsRouter)
app.listen(port, () => console.log("Listening on port " + port))