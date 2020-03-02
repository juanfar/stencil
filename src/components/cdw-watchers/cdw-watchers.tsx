import { Component, h, State, Watch } from '@stencil/core';


@Component({
  tag: 'cdw-watchers',
})
export class CdwWatchers {

  @State() activated: Boolean = false;
  @State() message: string = 'Valor actual de activated: false';

  toggleActivated() {
    this.activated = ! this.activated;
  }

  @Watch('activated')
  watchActivated(newValue: boolean, oldvalue: boolean) {
    this.message = `Valor anterior de activated: ${oldvalue}, valor actual: ${newValue}`;
  }

  render() {
    return (
      <div class="col-12" id="cdw-watchers">
        <button class="btn btn-info" onClick={this.toggleActivated.bind(this)}>
          {this.activated ? 'Desactivar' : 'Activar'}
        </button>
        <hr/>
        <div class="alert alert-warning">{this.message}</div>
      </div>
    );
  }
}