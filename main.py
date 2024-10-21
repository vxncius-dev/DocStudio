#!/usr/bin/env python3
import webview # type: ignore
from typing import Any


class Controller:
    def __init__(self) -> None:
        self._window = None

    def set_window(self, window: Any) -> None:
        self._window = window
      
    def minimize(self) -> None:
        self._window.minimize()

    def close(self) -> None:
        self._window.destroy()


class DocStudio:
    def __init__(self) -> None:
        self.controls = Controller()
        self.create_window()

    def create_window(self) -> None:
        window = webview.create_window(
            "DocStudio",
            "./src/index.html",
            width=800,
            height=600,
            resizable=False,
            fullscreen=False,
            frameless=True,
            easy_drag=False,
            zoomable=False,
            localization=None,
            js_api=self.controls,
        )
        self.controls.set_window(window)
        webview.start(debug=True)


if __name__ == '__main__':
    DocStudio()
