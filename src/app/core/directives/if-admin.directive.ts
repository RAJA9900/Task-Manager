import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Directive({ selector: '[appIfAdmin]', standalone: true })
export class IfAdminDirective {
private hasView = false;
@Input('appIfAdmin') set appIfAdmin(expected: boolean) {
const isAdmin = this.auth.isAdmin();
if (expected && isAdmin && !this.hasView) {
this.vc.createEmbeddedView(this.tpl);
this.hasView = true;
} else if ((!expected || !isAdmin) && this.hasView) {
this.vc.clear();
this.hasView = false;
}
}
constructor(private tpl: TemplateRef<unknown>, private vc: ViewContainerRef,
private auth: AuthService) {}
}