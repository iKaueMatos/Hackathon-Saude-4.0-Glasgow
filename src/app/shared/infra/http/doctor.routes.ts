import "reflect-metadata";
import express from 'express';
import { DoctorCreatedController } from "../../../modules/doctor/application/useCase/createdDoctor/DoctorCreatedController";

const router = express.Router();
const doctorCreatedController = new DoctorCreatedController();

router.post('/created', (req, res) => doctorCreatedController.handle(req, res));

export default router;
