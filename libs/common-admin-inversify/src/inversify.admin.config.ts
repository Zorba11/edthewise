import { AdminQPreviewStore, AdminQStore } from "@edthewise/application-admin-stores-web";
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
container.bind<AdminQStore>(ADMIN_TOKENS.AdminQStoreToken).to(AdminQStore).inSingletonScope();
container.bind<AdminQPreviewStore>(ADMIN_TOKENS.AdminQPreviewStoreToken).to(AdminQPreviewStore).inSingletonScope();

/**
 * Service bindings
 * */
container.bind<AdminQService>(ADMIN_TOKENS.AdminQServiceToken).to(AdminQService).inSingletonScope();
container.bind<AdminLoginService>(ADMIN_TOKENS.AdminLoginServiceToken).to(AdminLoginService).inSingletonScope();

export { container };
