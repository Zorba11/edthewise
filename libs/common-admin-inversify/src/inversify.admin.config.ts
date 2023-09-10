import {
  AdminMCQPreviewStore,
  AdminMCQStore,
  AdminSQPreviewStore,
  AdminSQStore,
} from "@edthewise/application-admin-stores-web";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";
import { AdminLoginService, AdminQService } from "@edthewise/foundation-communication-admin";
import { Container } from "inversify";

const container = new Container();

/**
 * Route Services bindings
 */

/**
 * Store bindings
 */
container.bind<AdminMCQStore>(ADMIN_TOKENS.AdminMCQStoreToken).to(AdminMCQStore).inSingletonScope();
container
  .bind<AdminMCQPreviewStore>(ADMIN_TOKENS.AdminmcQPreviewStoreToken)
  .to(AdminMCQPreviewStore)
  .inSingletonScope();
container.bind<AdminSQStore>(ADMIN_TOKENS.AdminSQStoreToken).to(AdminSQStore).inSingletonScope();
container.bind<AdminSQPreviewStore>(ADMIN_TOKENS.AdminSQPreviewStoreToken).to(AdminSQPreviewStore).inSingletonScope();

/**
 * Service bindings
 * */
container.bind<AdminQService>(ADMIN_TOKENS.AdminQServiceToken).to(AdminQService).inSingletonScope();
container.bind<AdminLoginService>(ADMIN_TOKENS.AdminLoginServiceToken).to(AdminLoginService).inSingletonScope();

export { container };
