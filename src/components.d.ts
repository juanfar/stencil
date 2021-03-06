/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CdwHolaMundo {
        "age": string;
        "name": string;
        "surname": string;
    }
    interface CdwPagination {
    }
    interface CdwSlots {
    }
    interface CdwTodoApp {
    }
    interface CdwWatchers {
    }
}
declare global {
    interface HTMLCdwHolaMundoElement extends Components.CdwHolaMundo, HTMLStencilElement {
    }
    var HTMLCdwHolaMundoElement: {
        prototype: HTMLCdwHolaMundoElement;
        new (): HTMLCdwHolaMundoElement;
    };
    interface HTMLCdwPaginationElement extends Components.CdwPagination, HTMLStencilElement {
    }
    var HTMLCdwPaginationElement: {
        prototype: HTMLCdwPaginationElement;
        new (): HTMLCdwPaginationElement;
    };
    interface HTMLCdwSlotsElement extends Components.CdwSlots, HTMLStencilElement {
    }
    var HTMLCdwSlotsElement: {
        prototype: HTMLCdwSlotsElement;
        new (): HTMLCdwSlotsElement;
    };
    interface HTMLCdwTodoAppElement extends Components.CdwTodoApp, HTMLStencilElement {
    }
    var HTMLCdwTodoAppElement: {
        prototype: HTMLCdwTodoAppElement;
        new (): HTMLCdwTodoAppElement;
    };
    interface HTMLCdwWatchersElement extends Components.CdwWatchers, HTMLStencilElement {
    }
    var HTMLCdwWatchersElement: {
        prototype: HTMLCdwWatchersElement;
        new (): HTMLCdwWatchersElement;
    };
    interface HTMLElementTagNameMap {
        "cdw-hola-mundo": HTMLCdwHolaMundoElement;
        "cdw-pagination": HTMLCdwPaginationElement;
        "cdw-slots": HTMLCdwSlotsElement;
        "cdw-todo-app": HTMLCdwTodoAppElement;
        "cdw-watchers": HTMLCdwWatchersElement;
    }
}
declare namespace LocalJSX {
    interface CdwHolaMundo {
        "age"?: string;
        "name"?: string;
        "surname"?: string;
    }
    interface CdwPagination {
    }
    interface CdwSlots {
    }
    interface CdwTodoApp {
    }
    interface CdwWatchers {
    }
    interface IntrinsicElements {
        "cdw-hola-mundo": CdwHolaMundo;
        "cdw-pagination": CdwPagination;
        "cdw-slots": CdwSlots;
        "cdw-todo-app": CdwTodoApp;
        "cdw-watchers": CdwWatchers;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cdw-hola-mundo": LocalJSX.CdwHolaMundo & JSXBase.HTMLAttributes<HTMLCdwHolaMundoElement>;
            "cdw-pagination": LocalJSX.CdwPagination & JSXBase.HTMLAttributes<HTMLCdwPaginationElement>;
            "cdw-slots": LocalJSX.CdwSlots & JSXBase.HTMLAttributes<HTMLCdwSlotsElement>;
            "cdw-todo-app": LocalJSX.CdwTodoApp & JSXBase.HTMLAttributes<HTMLCdwTodoAppElement>;
            "cdw-watchers": LocalJSX.CdwWatchers & JSXBase.HTMLAttributes<HTMLCdwWatchersElement>;
        }
    }
}
