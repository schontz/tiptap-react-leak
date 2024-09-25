# Tiptap memory leak repro

https://github.com/ueberdosis/tiptap/issues/5654

This repo demonstrates tiptap editor leaks when new editors are used across an application. In this demo, any editor that is used (edited) is kept in memory, even after it is unmounted.
