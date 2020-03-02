import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "cdw-hola-mundo",
  styleUrl: "cdw-hola-mundo.css"
})
export class CdwHolaMundo {
  @Prop() name: string;
  @Prop() surname: string;
  @Prop() age: string;

  render() {
    return <div class="alert alert-info">
			Hola {this.name} {this.surname}, tu edad es {this.age}
		</div>;
  }
}
