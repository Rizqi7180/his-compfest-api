import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
  doctor_name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  registrant_list: {
    type: [
      {
        user_id: String,
        first_name: String,
        last_name: String,
        age: Number,
      },
    ],
  },
})

const Appointment = mongoose.model('Appointment', AppointmentSchema)

export default Appointment
