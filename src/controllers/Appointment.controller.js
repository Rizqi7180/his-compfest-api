import Appointment from '../model/Appointment.model.js'
import User from '../model/User.model.js'
import HttpException from '../utils/HttpException.js'

export async function create(req, res, next) {
  try {
    const { doctor_name, description, registrant_list = [] } = req.body

    const newAppointment = await Appointment.create({
      doctor_name,
      description,
      registrant_list,
    })

    if (newAppointment) {
      return res.json({
        type: 'success',
        status: 200,
        message: 'Appointment added successfully',
      })
    }
  } catch (error) {
    return next(new HttpException(500, error.message))
  }
}

export async function get(req, res, next) {
  try {
    const appointments = await Appointment.find()

    return res.json({
      type: 'success',
      status: 200,
      message: 'Appointment list',
      data: appointments,
    })
  } catch (error) {
    return next(new HttpException(500, error.message))
  }
}

export async function update(req, res, next) {
  try {
    const { id, doctor_name, description, registrant_list } = req.body

    const updateData = {}
    if (doctor_name != null) updateData.doctor_name = doctor_name
    if (description != null) updateData.description = description
    if (registrant_list != null) updateData.registrant_list = registrant_list

    const appointment = await Appointment.findOneAndUpdate(
      { _id: id },
      updateData,
      {
        new: true,
      }
    )

    return res.json({
      type: 'success',
      status: 200,
      message: 'Appointment list',
      data: appointment,
    })
  } catch (error) {
    return next(new HttpException(500, error.message))
  }
}

export async function apply(req, res, next) {
  try {
    const { id, user_id } = req.body

    const appointment = await Appointment.findById(id)

    if (!appointment) {
      return next(new HttpException(400, 'Appointment not found'))
    }

    for (const registrant of appointment.registrant_list) {
      if (registrant.user_id === user_id) {
        return next(new HttpException(400, 'Appointment has been applied'))
      }
    }

    const patient = await User.findById(user_id)

    if (!patient) {
      return next(new HttpException(400, 'Patient not found'))
    }

    const registrant = {
      user_id: patient._id,
      first_name: patient.first_name,
      last_name: patient.last_name,
      age: patient.age,
    }

    appointment.registrant_list.push(registrant)

    await appointment.save()

    return res.json({
      type: 'success',
      status: 200,
      message: 'Apply appointment successfully',
      data: appointment,
    })
  } catch (error) {
    return next(new HttpException(500, error.message))
  }
}
