import nc from 'next-connect';

import { contact } from '../../../controllers/contact';
import error from '../../../middleware/error';

const handler = nc({ onError: error });

handler.post(contact);

export default handler;
