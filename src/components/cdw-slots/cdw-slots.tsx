import { Component, h } from "@stencil/core";

@Component({
  tag: "cdw-slots",
  styleUrl: "cdw-slots.css"
})
export class CdwSlots {
  render() {
    return (
      <div class="card col-12" id="cdw-slots">
        <div class="card-body">
          <h5 class="card-title"><slot name="title"></slot></h5>
          <h6 class="card-subtitle mb-2 text-muted"><slot name="subtitle"></slot></h6>
          <p class="card-text"><slot name="content"></slot></p>
        </div>
      </div>
    );
  }
}
