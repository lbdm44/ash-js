import { renderComponent } from '@glimmerx/core';
import { type Handler, type RouteHooks } from 'navigo';

export abstract class GlimmerRoute {
  private _routeComponent: any = null; // TODO: type this

  constructor(
    public path: string,
    private element: HTMLElement,
    private lazyComponent: () => Promise<unknown>
  ) {}

  hooks: RouteHooks = {
    before: (done) => {
      if (this._routeComponent !== null) {
        done();
        return;
      }

      this.lazyComponent().then((module) => {
        if (
          typeof module === 'object' &&
          module !== null &&
          'default' in module
        ) {
          this._routeComponent = module.default;
        }

        done();
      });
    },
  };

  handler: Handler = () => {
    this.element.innerHTML = '';
    renderComponent(this._routeComponent, this.element);
  };
}
