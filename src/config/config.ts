import * as dotenv from 'dotenv'

// Carrega o arquivo de configuração de acordo com o ambiente
dotenv.config({
  path: '.env'
})

// MongoDB connection string
export const mongoConection = process.env.MONGODB_URI

// JWT Secret
export const jwtSecret = process.env.JWT_SECRET
