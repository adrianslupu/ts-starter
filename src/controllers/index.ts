import { UsersController } from './users.controller';
import { PagesController } from './pages.controller';

const Users = new UsersController();
const Pages = new PagesController();

export default {
  Users,
  Pages,
};
