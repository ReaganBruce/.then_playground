import { Router } from 'express'

import fetchData from "./fetch/get.js";
import createData from "./fetch/post.js";
import deleteData from "./fetch/delete.js";
import updateData from './fetch/update.js';

const router = Router()


router.use(fetchData)
router.use(createData)
router.use(deleteData)
router.use(updateData)

export default router
