let PIECES_CSS = {
  "alpha": {
    "w": {
      "p": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MjAgMTc2OWgxMDA4cTgtOTctMTMyLTE4Mi0xMzItMTAxLTE5Ni41LTIzOS41VDExMjAgMTAzOUg5MjhxLTE1IDE3MC03OS41IDMwOC41VDY1MiAxNTg3cS0xNDEgODUtMTMyIDE4MnptNTA0IDc0SDQ0NnYtNzRxLTQtODAgNDEuNS0xMzdUNjEzIDE1MjRxMTE3LTkxIDE3MS41LTIxNy41VDg2MyAxMDM5SDU3NmwyODQtMjM5cS04Ni03NC04Ni0xODggMC0xMDMgNzMtMTc3dDE3Ny03NHExMDMgMCAxNzYuNSA3NHQ3My41IDE3N3EwIDExNC04NiAxODhsMjg0IDIzOWgtMjg3cTIzIDE0MSA3OCAyNjcuNXQxNzIgMjE3LjVxNzkgNTEgMTI0LjUgMTA4dDQyLjUgMTM3djc0ek03NTYgOTc0aDUzNmwtMjI1LTE5MXExMzQtMzEgMTM0LTE3MSAwLTc2LTUyLjUtMTI2LjVUMTAyNCA0MzVxLTczIDAtMTI1IDUwLjVUODQ3IDYxMnEwIDE0MCAxMzQgMTcxeiIgZmlsbD0iIzEwMTAxMCIvPjxnIGZpbGw9IiNmOWY5ZjkiPjxwYXRoIGQ9Ik04NzMuNDU3IDg4MS4zNDdjNTYuNTQ4LTQ3LjkxMiAxMDMuOTAxLTkwLjIyNSAxMDUuMjMtOTQuMDI4cy0xMy41Ni0xNC4xMTktMzMuMDg2LTIyLjkyNGMtMTUyLjI1Mi02OC42NTYtMTA4LjA5My0zMDIuNTM3IDYwLjktMzIyLjU1MiAzNS41MzctNC4yMDggNTEuMTYtMS4wNDMgOTAuOTYgMTguNDMgMTI5LjI3OCA2My4yNSAxMzIuMjU3IDI0Ni43MDkgNC45MzggMzA0LjEyMi0xOS41MjYgOC44MDUtMzQuNDE1IDE5LjEyLTMzLjA4NiAyMi45MjQgMS4zMjggMy44MDMgNDguNjgyIDQ2LjExNiAxMDUuMjMgOTQuMDI4bDEwMi44MTUgODcuMTE0SDc3MC42NDJ6Ii8+PHBhdGggZD0iTTc4MS4wMTcgOTYxLjg3YzAtMy42MjQgNy4wMjktMTAuOTggMTUuNjItMTYuMzQ1IDIxLjE5Ni0xMy4yMzcgMTc4LjkzMS0xNTIuMDcgMTgyLjQyLTE2MC41NiAxLjUzMi0zLjcyOC03LjI1NC05LjI5OS0xOS41MjUtMTIuMzc5LTEyLjI3Mi0zLjA4LTIyLjMxMi04LjQyMi0yMi4zMTItMTEuODdzLTkuNzIzLTExLjQ3NS0yMS42MDgtMTcuODM2Yy00OS41NzktMjYuNTMzLTcyLjM1Mi0xMjcuNTMtNDQuMDM3LTE5NS4yOTcgNS45ODMtMTQuMzIgMTEuNDg2LTI4Ljk2NiAxMi4yMjgtMzIuNTQ2IDIuMjEyLTEwLjY2NyAzNS4zNzMtNDEuMjIgNDQuNzQtNDEuMjIgNC43NzIgMCA4LjY3Ny0zLjIzNCA4LjY3Ny03LjE4OCAwLTEzLjIgODEuOTQ3LTI2Ljc4NiAxMTUuNjgxLTE5LjE3OCA1MC43MzQgMTEuNDQzIDExNi43OTMgNjIuMTMgMTI2LjIxIDk2Ljg0MiAxOS43MzUgNzIuNzUyIDE5LjQzIDEwMi42NC0xLjQ1NSAxNDIuOTc1LTE1Ljk1NCAzMC44MTItNjYuMDE2IDc3LjQwMy05Mi4wNDYgODUuNjY0LTEwLjU0NiAzLjM0OC0xNy45ODQgOC45NS0xNi41MjggMTIuNDUgMy40MTggOC4yMTcgMTYxLjc1NyAxNDcuMzI2IDE4Mi4yODEgMTYwLjE0MyA4LjU5MSA1LjM2NSAxNS42MiAxMi43MiAxNS42MiAxNi4zNDZzLTEwOS4zNDIgNi41OS0yNDIuOTgzIDYuNTljLTEzMy42NCAwLTI0Mi45ODMtMi45NjYtMjQyLjk4My02LjU5em0tMjYwLjMzOSA3OTYuMDA3YzAtMTUuODUgMjYuMjM2LTcyLjMzNSA0MS41NTEtODkuNDU2IDguMTctOS4xMzQgNTAuMTA3LTQ1LjAyNCA5My4xOTMtNzkuNzU2IDE1Mi45NDEtMTIzLjI5IDIzMy41ODgtMjY2LjUxNSAyNjUuOTc5LTQ3Mi4zNjRsMTAuOTczLTY5LjczOGgxODMuMjUybDEwLjk3MyA2OS43MzhjMzEuMDQgMTk3LjI3IDExMy42ODEgMzQ5LjUzIDI0OC4xMDcgNDU3LjEyMyAxMTUuMDQxIDkyLjA3NyAxMzMuODQgMTEzLjcyNiAxNDcuMjI1IDE2OS41NDVsNS43MjIgMjMuODY1aC01MDMuNDg4Yy0zNDAuMzE4IDAtNTAzLjQ4Ny0yLjkwMy01MDMuNDg3LTguOTU3eiIvPjwvZz48L3N2Zz4=",
      "n": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDA0IDEwOTJxMzEgMTcgNTQgNDIgMjEtMTUgMzYuNS0xMy41dDMzLjUtMS41cTc4LTExIDEyOC41LTg1dDUyLjUtMTY1bC0xOS02N3EtNTUgMjM5LTE4OCAyNTctMjEgMy00NSA1LjV0LTUzIDI3LjV6TTc0NiA2NDNsLTQ2LTYwcTYtMzkgMTE1LjUtMTA3LjVUMTAzNiAzMzJsMTE1LTE1NCA5NiAyMTdxMzQyIDE3MiA0MzIuNSA0MTcuNVQxNzI3IDE0MTZxLTE4IDEyOCA0LjUgMjM2LjVUMTc4OSAxODQzSDU0N3EtOS0xNzggMzktMzAxLjVUNzY5IDEzMDRxNzgtMTYgMTE1LTcxdDU1LTg1cS0yMzYtNDItMjkyIDYwbC01NiAxMDItMjE3LTEyMSAxMTUtODItNTEtNTAtMTIyIDg2LTEyLTI5NyAzOTYtMjYzcTEyIDE4IDIzIDMxdDIzIDI5TDM4MCA4ODRsNCAxMjUgNjQtNDEgMTM4IDE0NC03OCA2NSA0NyAyOCAzOC41LTQ1IDEwOC41LTczcTU0LTE4IDE2NS0yN3QxOTEgNzRxLTU2IDYzLTkxIDEzMi41VDgxNSAxMzY5cS05MiA3OS0xNDYgMTc2LjVUNjIxIDE3NjloMTAxOXEtMzUtMTMzLTMyLTIzNC41dDEyLjUtMTk5IDktMjA1VDE1ODkgODc4cS01MS0xMjYtMTM0LTIzNHQtMjYyLTE4OGwtNTktMTMzLTQ5IDY5cS05OSA2Mi0yMDggMTMxVDc0NiA2NDN6bTI5MiAzMGwtMjEyLTIgMTE2LTEwMHEzMC0yNSA4MCAzOC41dDE2IDYzLjV6TTUwMiA4NjhsMzcgMzEtNDYgNTUtNTctMjYgMzMtNTZ6IiBmaWxsPSIjMTAxMDEwIi8+PHBhdGggZD0iTTYyNy45NDcgMTcwNi4zMDZjNy4wNjUtNzYuMDE0IDMwLjY1OC0xMzkuNjg3IDc2LjAxNS0yMDUuMTQyIDU1LjYxMy04MC4yNTcgOTQuMzM1LTExNi4xNDcgMTU1LjE0LTE0My43OTQgNzEuMzA0LTMyLjQyMSA3OS4zODUtMzkuODgxIDEzNC41ODItMTI0LjIzMSA2Mi4yMTEtOTUuMDY5IDc2LjM5LTEwOC40MzUgMTE1LjI2NC0xMDguNjY1IDQyLjMwNy0uMjUgOTQuOTExLTI1LjMyMSAxMjkuMzg3LTYxLjY2NSA1Ni4xNC01OS4xODIgODUuNjUtMTY5Ljk5NyA2My4zMDEtMjM3LjcxMmwtMTAuOTA3LTMzLjA0OC0yMy42NDUgNzAuNDc0Yy0zNC4xMyAxMDEuNzIzLTY1LjQ5NCAxNDYuNTAyLTEyMy40MTYgMTc2LjIwNi0xNy43MDggOS4wODItNDIuMjQgMTYuNTEyLTU0LjUxNiAxNi41MTItMTIuMjc2IDAtMzYuNTQ2IDUuOTQ0LTUzLjkzNCAxMy4yMS0yOC41OSAxMS45NDUtMzUuNzQ4IDExLjgzNi03NC44MDgtMS4xMzgtNDYuNTg2LTE1LjQ3My0xNDQuMDc4LTEyLjM3OC0yMjIuNTYxIDcuMDY2LTQyLjgyMSAxMC42MS0xNTkuNzIgODQuNDg0LTE2OC4wNTQgMTA2LjIwNC02LjExNSAxNS45MzYtMjQuMjEyIDE3LjU4My0zOC4zMDkgMy40ODYtNy41NzMtNy41NzMtMS4zMzktMTcuNzIgMjUuNTM2LTQxLjU3bDM1LjU1NS0zMS41NTItNjkuNjEtNzMuMzUxLTY5LjYxMS03My4zNTItMzAuMzM1IDE0LjQ2Ni0zMC4zMzQgMTQuNDY1LTUuNDI4LTM5LjYwMmMtMi45ODYtMjEuNzgxLTUuNDI4LTQ1LjAxOS01LjQyOC01MS42MzkgMC02LjYyIDgyLjAzLTY2LjMzMyAxODIuMjkxLTEzMi42OTYgMTAwLjI2LTY2LjM2MiAxOTMuMDA2LTEzMy42MjEgMjA2LjEwMi0xNDkuNDY0IDM2LjI1Ny00My44NjIgNDguNDQ4LTUyLjk3NyAxOTAuNzA3LTE0Mi41ODcgOTUuNzY4LTYwLjMyNCAxMzcuNTE4LTkxLjg5NCAxNTEuNTQ2LTExNC41OTFsMTkuMzYyLTMxLjMyOCAyOS41NTYgNjYuMDg1YzI2LjAyIDU4LjE3NSAzMy44MjMgNjguMDAzIDY1LjIgODIuMTIxIDE5MC40MzcgODUuNjg3IDMzMy41MTYgMjczLjM3IDM3OS4zOTMgNDk3LjY2NSAxOS41NTIgOTUuNTg4IDE5LjgyMiAxNDkuMTA2IDIuNjI1IDUyMC42NzgtNC4yMjQgOTEuMjctMi4zIDEzMi4yMTYgOC43MTEgMTg1LjMzNSA3Ljc3NCAzNy41IDE0LjEzNCA3MS42NyAxNC4xMzQgNzUuOTMyIDAgNC40NTktMjE0LjI2NSA3Ljc1LTUwNC41NjkgNy43NUg2MjIuMzIxem0tMTAwLjE1LTgyMS45NDRjLTI3LjE4OC0yOC45NDEtNTUuODc3LTI1Ljg4NC03Ni42MzggOC4xNjctMjIuNTYgMzctMjIuMTI0IDM5LjExMyAxMC45NDMgNTMuMTA0IDI2LjkzMyAxMS4zOTcgMjkuNDcxIDEwLjczNyA1Ni4zNjEtMTQuNjVsMjguMTU4LTI2LjU4NXptNTIzLjU3My0yMzIuNDVjLTQuNjU4LTI2LjYxOC01Mi41My04Mi4wODgtNzUuOTA5LTg3Ljk1NS0yNC42NTYtNi4xODgtNDEuNzc2IDQuMTQtMTA3LjY2NCA2NC45NTVsLTQ3LjczIDQ0LjA1NCAxMTcuMTUzLTEuOTQ4YzExMS40MDctMS44NTEgMTE3LjAwNi0yLjc4OCAxMTQuMTUtMTkuMTA2eiIgZmlsbD0iI2Y5ZjlmOSIvPjwvc3ZnPg==",
      "b": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDI0IDM1NnE2NiAwIDY0LTY2IDEtNTUtNjQtNTUtNjYgMC02NCA1NS0zIDY2IDY0IDY2em0wIDEyMDRxMCAxMTQtMTAxIDE5OC41VDcwMCAxODQzSDIwNXEwLTExNyA2NS0xNzl0MTQyLTYyaDI1MHE1MSAwIDg4LTd0NzEtNjBxMTItMjAgMTAtMTZoNzZxLTcgMjEtMyAxMy00NSAxMDUtMTA5IDEyNC41VDY0OSAxNjc2SDQwOXEtNTIgMC04NiA0MHQtMzQgNTNoNDI0cTY2IDAgMTU4LjUtNjV0OTMuNS0xODVINjI0cTY3LTExNiA3Mi0yMjktMTE0LTExOS0xNjItMjIzLjVUNTI4IDg0M3EzMy05NiAxMTgtMTg5LjVUOTU4IDQwN3EtMTctMTEtNDYtMzZ0LTI5LTc5cTAtNTggNDEtOTZ0MTAwLTM4cTU4IDAgOTkuNSAzOHQ0MS41IDk2cTAgNTQtMjkuNSA3OXQtNDUuNSAzNnEyMjYgMTUzIDMxMSAyNDYuNVQxNTIwIDg0M3E0MiAxMTktNiAyMjMuNVQxMzUyIDEyOTBxNCAxMTMgNzIgMjI5aC0zNDFxMCAxMjAgOTMgMTg1dDE1OSA2NWg0MjRxMC0xMy0zNC41LTUzdC04NS41LTQwaC0yNDBxLTgzIDAtMTQ2LjUtMTkuNVQxMTQ0IDE1MzJxNCA4LTMtMTNoNzZxLTItNCAxMCAxNiAzMyA1MyA3MCA2MHQ4OSA3aDI1MHE3NiAwIDE0MS41IDYydDY1LjUgMTc5aC00OTVxLTEyMyAwLTIyMy41LTg0LjVUMTAyNCAxNTYwem0wLTExNGgyODNxLTI4LTg0LTI5LTE1NC0xMjAtNDEtMjU0LTM4LTEzNS0zLTI1NCAzOC0yIDcwLTI5IDE1NHptMC0yNjdxMTU5LTEgMjg1IDQyIDE4OS0xODAgMTQyLTM0Ni02MC0xOTMtNDI3LTQzMS0zNjggMjM4LTQyNyA0MzEtNDggMTY2IDE0MiAzNDYgMTI1LTQzIDI4NS00MnptLTQ3LTM2MVY3MTRoOTR2MTA0aDk1djg5aC05NXYxNjVoLTk0VjkwN2gtOTV2LTg5eiIgZmlsbD0iIzEwMTAxMCIvPjxwYXRoIGQ9Ik05ODAuMTggMzMzLjM0NGMtMjIuMTktMjIuMTktMjIuMTktNTUuOTEzIDAtNzguMTAyIDM1LjgzOC0zNS44MzggMTA0LjEzNS0xMC4yMjcgMTA0LjEzNSAzOS4wNSAwIDI5LjQ1OC0yOS4wMjMgNTYuNDA4LTYwLjc0NiA1Ni40MDgtMTQuNDYzIDAtMzMuNzQ3LTcuNzE0LTQzLjM5LTE3LjM1NnptLTI4OC42MjMgODI5LjU4Yy04Ni4wMTYtMTAzLjMwNC0xMTguNDMtMjE3LjUxNS04NS4yMDQtMzAwLjIyNCAyMy40Ni01OC40MDIgODcuNjI1LTE0NS40ODIgMTUyLjg1NC0yMDcuNDQzIDY2LjY1Ni02My4zMTcgMTkzLjgzNy0xNjEuNzE1IDI0My43ODktMTg4LjYxNmwyNy4zMzgtMTQuNzIyIDkwLjc5NCA2Ni4xNjdjMjMwLjMxIDE2Ny44NDEgMzQ3LjIyNiAzMjMuNDQ0IDMzMy4xNjkgNDQzLjQxMS02LjgxIDU4LjExNS00Ni4wNCAxMzguMTY0LTk4LjcxNiAyMDEuNDI3bC00NC4wNDkgNTIuOTAxLTYzLjcxLTE3LjQ2MWMtNTMuMTY2LTE0LjU3Mi05MC4yOC0xNy40NjItMjI0LjI1My0xNy40NjItMTMzLjk3MyAwLTE3MS4wODYgMi44OS0yMjQuMjUyIDE3LjQ2MmwtNjMuNzEgMTcuNDYxem0zODQuMDgtMTY1LjcxNnYtODIuNDRoOTUuNDU4VjgxMC42MzJoLTk1LjQ1OFY3MDYuNDk2SDk3MS41MDF2MTA0LjEzNmgtOTUuNDU4djEwNC4xMzZoOTUuNDU4djE2NC44OGgxMDQuMTM2em0tMzI5LjY2IDQ0NC43NDZjLjA1Ny0xLjE5MyA1Ljg2OC0yMy42NDggMTIuOTE0LTQ5Ljg5OCA3LjA0Ni0yNi4yNTEgMTIuODU4LTU4LjM2IDEyLjkxNC03MS4zNTEuMDkzLTIxLjE1NyA1LjMxLTI1LjIzMiA1MC4wMDItMzkuMDUxIDcwLjg4Ny0yMS45MTkgMzMxLjU4LTIyLjI2MSA0MDEuNzEtLjUyOGw0OC4wODMgMTQuOTAxIDEwLjIyMyA1OS42MThjNS42MjMgMzIuNzkgMTIuNzE1IDY2LjExMiAxNS43NiA3NC4wNDggNS4wOTMgMTMuMjctMTYuODU3IDE0LjQzLTI3My4wODUgMTQuNDMtMTUzLjI0MyAwLTI3OC41NzctLjk3Ni0yNzguNTItMi4xNjl6bS00MzMuNzUxIDI5Ni44NjljMzguMjAzLTUzLjY1IDQ2LjIyNC01NS41NzQgMjU1LjMzMi02MS4yMzYgMTA1LjI2Ni0yLjg1IDIwNS4zMjYtOS42ODcgMjIyLjQ0MS0xNS4xOTkgMzguNjMyLTEyLjQ0IDg3LjMwOC02MC4xNCAxMDcuODQ1LTEwNS42ODUgMTIuNzk0LTI4LjM3MiAxOS44ODYtMzQuNDc4IDQwLjA0Ny0zNC40NzggMjIuOTIgMCAyNC4xNjQgMS44MTggMTkuMzA3IDI4LjIwMy0xNS42MTcgODQuODM2LTU4Ljg2MSAxMzYuNzE3LTE1My45MTMgMTg0LjY1MmwtNTkuNzQzIDMwLjEyOEgyOTMuNDM4em05MzEuNjI4LTMuNzQzYy05NS41OS00OC4yMDctMTM1LjA5NC05NC4wMDMtMTUwLjAyNS0xNzMuOTIzLTcuMTItMzguMTA3LTYuNzkyLTM4LjkyNiAxNS40Ny0zOC42NzQgMTguNDQuMjEgMjguMTcxIDkuNjUzIDUxLjQxNyA0OS44OTggNTMuODU1IDkzLjIzOSA5Mi42MTIgMTA1Ljc5MiAzMjcuMTI0IDEwNS45NTggMTgzLjcxMS4xMyAyMDQuOTk3IDUuMjE2IDI0NS41MiA1OC42NjZsMjEuMzgzIDI4LjIwM2gtNDUxLjE0N3oiIGZpbGw9IiNmOWY5ZjkiLz48L3N2Zz4=",
      "r": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDI0IDE1MDFINjQzbDUtNzRoNzUybDUgNzR6bTAtNjYxSDY5Mmw1LTc0aDY1NGw1IDc0em0wIDEwMDNIMzgzbDI5LTI2NCAxNTktMTE4IDUwLTY1OS0xNDktMTA3LTE3LTM0MWgyODl2MTQ3aDEzN1YzNTRoMjg2djE0N2gxMzdWMzU0aDI4OWwtMTcgMzQxLTE0OSAxMDcgNTAgNjU5IDE1OSAxMTggMjkgMjY0em0wLTc0aDU1N2wtMTUtMTQ5LTE2MS0xMTktNTQtNzM1IDE1Mi0xMDkgMTMtMjMwaC0xMzh2MTQ4aC0yODVWNDI3SDk1NXYxNDhINjcwVjQyN0g1MzJsMTMgMjMwIDE1MiAxMDktNTQgNzM1LTE2MSAxMTktMTUgMTQ5eiIgZmlsbD0iIzEwMTAxMCIvPjxwYXRoIGQ9Ik02NTUuODMyIDEzNzguNDk1YzUuMDIzLTQ5LjY4NCAzOC40MDUtNTAwLjU2NyAzOC40MDUtNTE4LjcyMiAwLTExLjA2MSA0NC44NjgtMTIuODA0IDMyOS43NjMtMTIuODA0czMyOS43NjMgMS43NDMgMzI5Ljc2MyAxMi44MDRjMCAxOC4xNTUgMzMuMzgyIDQ2OS4wMzggMzguNDA1IDUxOC43MjJsNC4xNjcgNDEuMjJoLTc0NC42N3ptLTMxLjA0OC02NzAuODQ4bC03My43MzMtNTIuNTQzLTUuNjQ3LTcxLjExOGMtMy4xMDYtMzkuMTE1LTYuMDM1LTg5LjY2Ny02LjUwOS0xMTIuMzM5bC0uODYxLTQxLjIyaDEzMC4xNjl2MTQ3LjUyNmgyOTUuMDUxVjQzMC40MjdoMTIxLjQ5MnYxNDcuNTI2aDI5NS4wNTFWNDMwLjQyN2gxMzAuMTY5bC0uODYgNDEuMjJjLS40NzUgMjIuNjcyLTMuNDAzIDczLjIyNC02LjUxIDExMi4zNGwtNS42NDcgNzEuMTE3LTczLjczMyA1Mi41NDMtNzMuNzM0IDUyLjU0M0g2OTguNTE4ek00NzEuNjY3IDE3NTEuNjQ4YzIuMzI0LTguMzUzIDYuNzUxLTQxLjA2IDkuODM4LTcyLjY4NGw1LjYxMS01Ny40OTcgNzkuMzM1LTU3LjQ4NiA3OS4zMzUtNTcuNDg2aDc1Ni40MjhsNzkuMzM1IDU3LjQ4NiA3OS4zMzUgNTcuNDg2IDUuNjExIDU3LjQ5N2MzLjA4NyAzMS42MjMgNy41MTQgNjQuMzMgOS44MzggNzIuNjgzIDMuOTkzIDE0LjM1LTI2LjQ1MiAxNS4xODctNTUyLjMzMyAxNS4xODdzLTU1Ni4zMjYtLjgzNy01NTIuMzMzLTE1LjE4NnoiIGZpbGw9IiNmOWY5ZjkiLz48L3N2Zz4=",
      "q": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMDI0IDE3NjloNDc4cS01My0xMzAtNDMtMjgwLTEwMC0zOS0yMTMtNjcuNXQtMjIyLTI4LjVxLTExMCAwLTIyMyAyOC41dC0yMTIgNjcuNXE5IDE1MC00MyAyODB6bTAtNDUwcTExMSAwIDIyMy41IDI2LjV0MjIwLjUgNjcuNXExNy0xMDUgNjAuNS0yMTIuNXQxMDUuNS0yMTIuNWwtMjIwIDE1NS0xMjMtNjAxLTI2NyA1NTUtMjY3LTU1NS0xMjMgNjAxLTIyMC0xNTVxNjEgMTA1IDEwNC41IDIxMi41dDYxLjUgMjEyLjVxMTA4LTQxIDIyMC41LTY3LjV0MjIzLjUtMjYuNXptMCA1MjRoLTU4M3ExMTQtMjMxIDU3LjUtNDU2LjV0LTIwMi41LTQ0OS41cS0xMiAyLTE5IDItNTQgMC05Mi41LTM4LjV0LTM4LjUtOTIuNSAzOC41LTkyLjUgOTIuNS0zOC41IDkyLjUgMzguNSAzOC41IDkyLjVxMCAyMC02IDM4LTQgMTQtMTUgMzNsMTk2IDEzOSAxMDAtNDg2cS02NC0zMS03Mi0xMDMtNS00NCAyOS05MXQ4OC01M3E1NC01IDk2IDI5dDQ4IDg4cTcgNjgtNDYgMTE0bDE5OCA0MTIgMTk4LTQxMnEtNTQtNDYtNDYtMTE0IDYtNTQgNDgtODh0OTYtMjlxNTQgNiA4Ny41IDUzdDI5LjUgOTFxLTkgNzItNzIgMTAzbDEwMCA0ODYgMTk2LTEzOXEtMTItMTktMTUtMzMtNi0xOC02LTM4IDAtNTQgMzguNS05Mi41dDkyLjUtMzguNSA5Mi41IDM4LjUgMzguNSA5Mi41LTM4LjUgOTIuNS05Mi41IDM4LjVxLTcgMC0xOS0yLTE0NyAyMjQtMjAzIDQ0OS41dDU4IDQ1Ni41em0tNzQ4LTEwOTdxLTYyIDAtNjIgNjJ0NjIgNjJxNjMgMCA2My02MnQtNjMtNjJ6bTQ2Ni0zOTRxLTYyIDAtNjIgNjJ0NjIgNjIgNjItNjItNjItNjJ6bS0xNTIgMTE2NyAxMTkgNzItMTM0IDg2cTE5LTg2IDE1LTE1OHptMTE4Mi03NzNxLTYzIDAtNjMgNjJ0NjMgNjJxNjIgMCA2Mi02MnQtNjItNjJ6bS00NjYtMzk0cS02MiAwLTYyIDYydDYyIDYyIDYyLTYyLTYyLTYyem0xNTIgMTE2Ny0xMTkgNzIgMTM0IDg2cS0yMC04Ni0xNS0xNTh6bS01NzMgNDcgMTM5LTgzIDEzOSA4Ni0xMzkgODR6IiBmaWxsPSIjMTAxMDEwIi8+PGcgZmlsbD0iI2Y5ZjlmOSI+PHBhdGggZD0ibTU3Ni43NzQgMTM3NC4xNTZjLTE0LjI2Ny02Ni43NC01Mi4zMjgtMTczLjQ0MS05MS44MTMtMjU3LjM5My0yMy4zNy00OS42ODgtNDAuODM1LTkxLjk5OS0zOC44MS05NC4wMjQgMi4wMjUtMi4wMjQgNDUuODMgMjYuMTc2IDk3LjM0NCA2Mi42NjhsOTMuNjYzIDY2LjM1IDU4LjQ0Ny0yODQuNzMzYzMyLjE0NS0xNTYuNjA0IDU5LjYzMi0yOTAuMzA0IDYxLjA4Mi0yOTcuMTE0czYwLjk0NCAxMDkuMzY3IDEzMi4yMTIgMjU4LjE3YzcxLjI2NyAxNDguODAyIDEzMi4wNjIgMjcwLjU1IDEzNS4xMDEgMjcwLjU1czYzLjgzNC0xMjEuNzQ4IDEzNS4xMDEtMjcwLjU1YzcxLjI2Ny0xNDguODAzIDEzMC43NjMtMjY0Ljk4IDEzMi4yMTItMjU4LjE3IDEuNDUgNi44MSAyOC45MzYgMTQwLjUxIDYxLjA4MiAyOTcuMTEzbDU4LjQ0NyAyODQuNzMyIDkzLjY2My02Ni4zNDljNTEuNTE0LTM2LjQ5MiA5NS41NDItNjQuNDcgOTcuODM5LTYyLjE3M3MtMTEuOTU3IDM2LjI2NC0zMS42NzUgNzUuNDhjLTM4LjQ3NCA3Ni41MjItNzguMzE2IDE4NC40MDUtOTUuMzE0IDI1OC4wODYtNS43OCAyNS4wNTgtMTMuMDUgNDUuNDktMTYuMTUzIDQ1LjQwNnMtNDEuNjYtMTEuNTIxLTg1LjY4LTI1LjQxNWMtMTQyLjUzNi00NC45ODctMjEyLjk4OC01Ni4zNDQtMzQ5LjUyMi01Ni4zNDRzLTIwNi45ODYgMTEuMzU3LTM0OS41MjEgNTYuMzQ0Yy00NC4wMjEgMTMuODk0LTgyLjY1NyAyNS4zMy04NS44NTcgMjUuNDE1LTMuMi4wODQtOC41MzItMTIuNTM4LTExLjg0OC0yOC4wNXoiLz48cGF0aCBkPSJtNTU4LjkyNiAxNzQ3LjMwOWMzLjA1OC0xMC43NCA3Ljc3MS0yOS41ODkgMTAuNDc0LTQxLjg4OCAzLjU3NC0xNi4yNjEgMjMuNjAzLTM0LjAxNSA3My40MjQtNjUuMDg0IDM3LjY4LTIzLjQ5OCA2OC41NjgtNDUuMjA0IDY4LjY0LTQ4LjIzNi4wNy0zLjAzMi0yNy4yMDYtMjIuMDMtNjAuNjE3LTQyLjIxNi0zMy40MS0yMC4xODctNjAuNzQ1LTQxLjM0LTYwLjc0NS00Ny4wMDUgMC0xMi43NjkgMTQxLjMyLTU5LjgxMiAyNTEuMzU3LTgzLjY3NCAxMTAuOTY0LTI0LjA2MiAyNTQuMTE4LTI0LjA2MiAzNjUuMDgyIDAgMTEwLjAzNyAyMy44NjIgMjUxLjM1NyA3MC45MDUgMjUxLjM1NyA4My42NzQgMCA1LjY2Ni0yNy4zMzUgMjYuODE4LTYwLjc0NSA0Ny4wMDVzLTYwLjY2IDM5LjE4NC02MC41NTQgNDIuMjE2Yy4xMDUgMy4wMzIgMjkuNDI5IDIzLjkgNjUuMTYzIDQ2LjM3NiA2Mi44NDIgMzkuNTIzIDczLjgwNCA1Mi45NTMgODcuMzggMTA3LjA0NWw1LjM1IDIxLjMxMmgtOTQxLjEyNnptNTM4LjUyOS0xMzIuOTljMzUuOTY2LTIxLjgzNSA2NS4zNzMtNDIuMzM2IDY1LjM0OC00NS41NTktLjA1NC03LjE0My0xMjcuNzE0LTg4LjI5OS0xMzguODk3LTg4LjI5OS0xNC43MjggMC0xMzkuNjI1IDc5LjgyNy0xMzcuMDA1IDg3LjU2NiAzLjQwMiAxMC4wNDggMTIwLjk5NiA4NC42NTQgMTM0LjYyMiA4NS40MSA1Ljc5Ny4zMiAzOS45NjYtMTcuMjgyIDc1LjkzMi0zOS4xMTd6bTY0MC43NC03NTYuODc5Yy0yNy45MjQtMTcuNzUxLTI3Ljg1My04MS4zMy4xMS05OS4xMSAzNS4zMzYtMjIuNDY5IDkyLjc0NiA4LjIyNyA5Mi43NDYgNDkuNTg5IDAgNDEuNDMtNTcuNDE0IDcyLjA1LTkyLjg1NiA0OS41MnptLTQ1My44NTYtMzg5LjQ2NWMtMzQuMjc2LTEyLjcyNS00Ni42OTMtNjcuNzE2LTIxLjA3NS05My4zMzUgMTcuNTc2LTE3LjU3NiA2Ny45NjQtMTcuNTc2IDg1LjU0IDAgMTYuMzYyIDE2LjM2MiAxNy44MTcgNTUuNjc1IDIuNzkgNzUuMzQ4LTEyLjE0OSAxNS45MDMtNDcuNDQzIDI1LjM0Mi02Ny4yNTUgMTcuOTg3em0tNTY0LjA2OCAwYy0zNC4yNzYtMTIuNzI1LTQ2LjY5My02Ny43MTYtMjEuMDc1LTkzLjMzNSAxNy41NzYtMTcuNTc2IDY3Ljk2NC0xNy41NzYgODUuNTQgMCAxNi4zNjIgMTYuMzYyIDE3LjgxNyA1NS42NzUgMi43OSA3NS4zNDgtMTIuMTQ4IDE1LjkwMy00Ny40NDIgMjUuMzQyLTY3LjI1NSAxNy45ODd6bS00ODUuOTY2IDM3OC45OTVjLTIyLjE5LTIyLjE5LTIyLjE5LTU1LjkxMyAwLTc4LjEwMiAxNy40NDEtMTcuNDQyIDU2LjEtMjIuODAyIDc1LjUtMTAuNDcgMjcuOTI0IDE3Ljc1IDI3Ljg1MyA4MS4zMjktLjExIDk5LjExLTE5LjMgMTIuMjctNTcuOTg5IDYuODYzLTc1LjM5LTEwLjUzOXoiLz48L2c+PC9zdmc+",
      "k": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NzcgMjk4di05NWg5NHY5NWgxMDd2OTVoLTEwN3YxNTNxLTQ4LTE2LTk0IDBWMzkzSDg3MHYtOTV6bTQ3IDMxNHEtNDcgMC0xMzYgMTIxLTMxLTM2LTUwLTU1IDkzLTE0MCAxODYtMTQwIDkyIDAgMTg2IDE0MC0yMCAxOS01MCA1NS05MC0xMjEtMTM2LTEyMXptLTQ0NyA5MDdsLTI2IDE1NiAxNDUtODR6bTQxMC0yMDZxLTEtMTQ3LTM2LjUtMjc0LjVUODcwIDg0NXEtNDUtODgtMTMxLjUtMTUzVDU3MCA2MjdxLTEwMyAwLTIwOCA5M1QyNTcgOTQ5cTAgMTA5IDg2LjUgMjM2VDU0NiAxNDA4cTIxMi04OCA0NDEtOTV6bTM3IDUzMEg0NDhsNjEtMzY1cS0zMjUtMjgwLTMyNi01MzUtMS0xNTkgMTI1LTI3NC41VDU3NSA1NTNxNzggMCAxNTguNSA0N1Q4NzYgNzE5cTYxIDc0IDk4LjUgMTY0LjVUMTAyNCAxMDM0cTEyLTYwIDQ5LTE1MC41dDk5LTE2NC41cTYxLTcyIDE0Mi0xMTl0MTU5LTQ3cTE0MCAwIDI2NiAxMTUuNVQxODY1IDk0M3EtMiAyNTUtMzI2IDUzNWw2MSAzNjV6bTAtNzRoNDg5bC01MC0yOThxLTIxNi04NC00MzktODR0LTQzOSA4NGwtNTAgMjk4em00NDctMjUwbDI2IDE1Ni0xNDUtODR6bS00MTAtMjA2cTIyOSA3IDQ0MSA5NSAxMTUtOTYgMjAyLTIyM3Q4Ny0yMzZxMC0xMzYtMTA1LjUtMjI5VDE0NzggNjI3cS04MyAwLTE2OS41IDY1VDExNzggODQ1cS00NiA2Ni04MS41IDE5My41VDEwNjEgMTMxM3ptLTE3NiAyMzNsMTQxLTg0IDEzNyA4Ni0xNDEgODR6IiBmaWxsPSIjMTAxMDEwIi8+PGcgZmlsbD0iI2Y5ZjlmOSI+PHBhdGggZD0iTTQ2Ny40NzMgMTMyNC43MzdjLTEzNC43My0xMzkuMzcxLTIwMC40MjgtMjU5LjY0Mi0yMDEuNzI3LTM2OS4yOTMtMS4wNDgtODguNDU1IDE5Ljk5My0xNDEuMjc1IDgzLjE5Mi0yMDguODM1IDEzOC43MTYtMTQ4LjI4OCAyOTYuODAxLTE0OC45NiA0MzcuNjEzLTEuODU5IDYyLjUwMyA2NS4yOTYgMTA3LjMwMiAxNDIuODUzIDE0Mi40OTMgMjQ2LjY4NyAyNy44MjkgODIuMTEzIDUxLjQ3NCAyMDcuNDg3IDUxLjUzMSAyNzMuMjMyLjAzOCA0NC4zNzYtOC4zNTkgNTAuNTI2LTY5LjM4OSA1MC44Mi01NS4yNTIuMjY2LTE4NS4yMiAyNi45NzgtMjc3LjY5NCA1Ny4wNzRsLTkxLjEyIDI5LjY1NXptNTQ0Ljc4LTM0Ny43NTdjLTguODg3LTQ0LjQzNC01OC4xOS0xNTQuODQzLTg5LjQxNy0yMDAuMjRsLTI5LjY5Mi00My4xNjQgMzIuMDYzLTM5LjEzYzc4LjI5Ny05NS41NSAxMTkuMjg5LTk1LjU1IDE5Ny41ODYgMGwzMi4wNjMgMzkuMTMtMjkuNjkyIDQzLjE2NGMtMzEuMjI3IDQ1LjM5Ny04MC41MyAxNTUuODA2LTg5LjQxNyAyMDAuMjQtNi42OTcgMzMuNDgzLTE2Ljc5NyAzMy40ODMtMjMuNDk0IDB6Ii8+PHBhdGggZD0iTTQ3MC4zNzYgMTMyNS42NzljLTE0NC4yLTE2MC44OC0xOTIuNjYxLTI0Ni44NjQtMTk5LjU0LTM1NC4wNDItNS4wNS03OC43MTIgOC43MzktMTMxLjc4OCA0Ny4zOTctMTgyLjQzMyAxNS44ODctMjAuODEzIDI4Ljg4Ni00MS43MTQgMjguODg2LTQ2LjQ0NSAwLTQuNzMyIDQuMzY1LTguNjAzIDkuNzAxLTguNjAzczIzLjcwNy0xMi4yOTcgNDAuODI1LTI3LjMyNmM3Ny4xNDYtNjcuNzM1IDE3NC4yMjctODYuNDg4IDI1OS4xOTItNTAuMDY4IDE1NS45NSA2Ni44NDcgMjY2LjAzIDI0NS4yIDMwOS44MjIgNTAxLjk3NCAyMy43NzQgMTM5LjM5NiAxNy42MiAxNTYuODQ0LTU1LjMyOSAxNTYuODQ0LTU4LjMyIDAtMTYyLjA4OCAyMC45NzgtMjY0Ljc5NSA1My41My00Ny43NDMgMTUuMTMzLTkxLjc0OCAyOC40NjgtOTcuNzg4IDI5LjYzNC02LjA0IDEuMTY1LTQxLjMwNy0zMS43MTQtNzguMzctNzMuMDY1em05MzkuNzMyIDQ1LjYzNmMtODguNjk2LTI4Ljk4Ni0yMTguODA5LTU1LjU2NC0yNzMuMjk0LTU1LjgyNi02Mi41OTgtLjMwMS02OS40MjQtNS44MjctNjkuNDI0LTU2LjE5MSAwLTY3LjM1OSAyMy40NDktMTg5Ljg3OCA1Mi4wMi0yNzEuODA0IDM1LjAzNS0xMDAuNDU3IDgwLjk1LTE3OC45MjUgMTQyLjA0LTI0Mi43NDQgMTQwLjgxLTE0Ny4xIDI5OC44OTUtMTQ2LjQzIDQzNy42MTIgMS44NiA2My4zMDcgNjcuNjc0IDg0LjI5NiAxMjAuNDQzIDgzLjA2NyAyMDguODM0LTEuMDE3IDczLjE4OS0yNi4xNjEgMTQwLjQ5My04NS41NjIgMjI5LjAyOS00MS45NzQgNjIuNTYxLTE2MC40ODEgMTk1LjU4NS0xODUuMzYzIDIwOC4wNjktOS4xNyA0LjYwMS00NS4yMjYtMi45NjktMTAxLjA5Ni0yMS4yMjd6bS04NjUuOTgyIDM2Mi45NzdjNy43NTktNTAuNDk0IDE0Ljc5LTU4LjQyNSA5MC41MzYtMTAyLjExNWw3MC44ODYtNDAuODg4LTQ2Ljg3NS0yOC40NzZjLTcyLjA4NS00My43OS03Ny45MzItNDkuNTk3LTcxLjkyOS03MS40NDIgNi0yMS44MyA4MS40MTgtNDkuMzcxIDIxMi43MTYtNzcuNjggMTAyLjEwMy0yMi4wMTYgMzQ2Ljk3Ny0yMi4wMTYgNDQ5LjA4IDAgMTMxLjI5OCAyOC4zMDkgMjA2LjcxNiA1NS44NSAyMTIuNzE2IDc3LjY4IDYuMDAzIDIxLjg0NS4xNTYgMjcuNjUyLTcxLjkyOSA3MS40NDJsLTQ2Ljg3NiAyOC40NzYgNzAuODg3IDQwLjg4OGM3NS43NDUgNDMuNjkgODIuNzc3IDUxLjYyIDkwLjUzNiAxMDIuMTE1bDUgMzIuNTQySDUzOS4xMjZ6bTU1MC4xMTgtMTM4Ljc3MWMzNy43Ni0yMi42MjkgNjcuNDIyLTQ0Ljg0MSA2NS45MTYtNDkuMzZzLTMyLjIzNC0yNi43MDktNjguMjg0LTQ5LjMwOWwtNjUuNTQ0LTQxLjA5MS02Ny43MjYgNDAuNjRjLTM3LjI0OSAyMi4zNS02OC44NzEgNDQuNTA1LTcwLjI3MiA0OS4yMy0yLjAyNyA2LjgzNyAxMjEuOTkzIDkxLjAzMyAxMzQuMDg5IDkxLjAzMyAxLjc0MSAwIDM0LjA2LTE4LjUxNCA3MS44Mi00MS4xNDN6Ii8+PC9nPjwvc3ZnPg=="
    },
    "b": {
      "p": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDI0IDE4NDNINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+",
      "n": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MDIgODY4bC01MiAxLTI2IDY0IDY5IDIxIDQ2LTU1em01MzYtMTg3cTM0IDEtMTYtNjh0LTgwLTQyTDgyNiA2ODB6bS0zMzgtOThxNi0zOSAxMTUuNS0xMDcuNVQxMDM2IDMzMmwxMTUtMTU0IDk2IDIxN3EzNDIgMTcyIDQzMi41IDQxNy41VDE3MjcgMTQxNnEtMTggMTI4IDQuNSAyMzZ0NTcuNSAxOTBsLTEyNDIgMXEtOS0xNzggMzktMzAxLjVUNzY5IDEzMDRxNTAtMTEgODIuNS0zOS41VDkwNSAxMjA2bDYyLjUtMSAxMzgtMjkgMTM5LTk3IDY2LjUtMjA3cTAtMTctOC41LTM0dC0xMS41LTM3cS02MiAyMjgtMTYxIDI4OC41VDkzOSAxMTQ4cS0yMzYtNDItMjkyIDYwbC01NiAxMDItMjE3LTEyMSAxMTUtODItNTEtNTAtMTIyIDg2LTEyLTI5N3ptOTgxIDExOTJxLTEwMi0xMzAtODUtMzA4LjV0MjctMzYyLjUtNTAtMzUxLjVUMTI1NyA0NzdxMjIwIDE2NCAyNTIuNSAzNDJ0MTYuNSAzNTAuNS0xMiAzMjkgMTY3IDI3Ni41eiIgZmlsbD0iIzEwMTAxMCIvPjxwYXRoIGQ9Ik0xNjAxLjMwNSAxNjkzLjA0Yy04MS4wOC04OS43NDctOTEuNTg0LTE1Ni41NDEtNzQuMjI3LTQ3Mi4wNSAyMC4zNzktMzcwLjQ1LTguNzUyLTQ5NS4xMTktMTUwLjU1OC02NDQuMzQtMjguMzQ4LTI5LjgzLTQ3LjgxMy01NC4yMzYtNDMuMjU2LTU0LjIzNiAxNy4wMTcgMCAxMDAuMTEgNTguNDM0IDE0NC42NSAxMDEuNzI2IDU3LjA1MiA1NS40NSA4Ni4xNCAxMDcuODkxIDEwOS42MzkgMTk3LjY2MyAzNC45OTQgMTMzLjY4NiAzNy41NDQgMjAxLjk0IDE3LjMyNyA0NjMuODE4LTE5Ljk5IDI1OC45Ni0xNy41NDEgMzEyLjYyIDE4LjA1OCAzOTUuNjcxIDkuNjk5IDIyLjYyNSAxNi4xMyA0Mi42NCAxNC4yOTQgNDQuNDc3LTEuODM3IDEuODM3LTE4LjAwNC0xMi44OS0zNS45MjctMzIuNzI5ek04OTYuNzAzIDYyMS4zM2M1NS42ODMtNTMuMjY4IDYwLjQyMi01NS45NjEgNzguMTAyLTQ0LjM3OCAyNi4wNjggMTcuMDc4IDc2LjQwMyA4NC4wNjYgNzAuNDMgOTMuNzMtMi42OTcgNC4zNjQtNTAuNTU4IDcuODA1LTEwNi4zNTcgNy42NDZsLTEwMS40NTQtLjI4OHpNNDY0LjI3MSA5NDEuNDQ2Yy0yNy40NDEtNi42LTMxLjI3LTE0LjY4NC0yMC45Ni00NC4yNTggNy42ODMtMjIuMDM4IDE0LjQ4NC0yNy42NTYgMzMuNDgxLTI3LjY1NiAxMy4xMTIgMCAzMC4zNjMgNy4yMDggMzguMzM1IDE2LjAxNyAxMy41OTIgMTUuMDIgMTMuMzY3IDE3LjQ1LTMuNjI0IDM5LjA1LTkuOTY1IDEyLjY3LTIwLjc2NCAyMi41ODItMjMuOTk3IDIyLjAyOC0zLjIzMy0uNTUzLTEzLjY4OS0yLjg4NS0yMy4yMzUtNS4xODF6IiBmaWxsPSIjZWNlY2VjIi8+PC9zdmc+",
      "b": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03NjggMTM2NXEtNSAzOS0yNiA4Mmg1NjRxLTE4LTM2LTI2LTgyem00OTUtNzNsNDYtNzNxLTE0Mi00OS0yODUtNDctMTQ0LTItMjg1IDQ3bDQ2IDczcTExOC00MCAyMzktMzggMTIwLTIgMjM5IDM4em0tNDMyIDIyN0g2MjRxNjctMTE2IDcyLTIyOS0xMTQtMTE5LTE2Mi0yMjMuNVQ1MjggODQzcTMzLTk2IDExOC0xODkuNVQ5NTggNDA3cS0xNy0xMS00Ni0zNnQtMjktNzlxMC01OCA0MS05NnQxMDAtMzhxNTggMCA5OS41IDM4dDQxLjUgOTZxMCA1NC0yOS41IDc5dC00NS41IDM2cTIyNiAxNTMgMzExIDI0Ni41VDE1MjAgODQzcTQyIDExOS02IDIyMy41VDEzNTIgMTI5MHE0IDExMyA3MiAyMjloLTIwN3EtMi00IDEwIDE2IDMzIDUzIDcwIDYwdDg5IDdoMjUwcTc2IDAgMTQxLjUgNjJ0NjUuNSAxNzloLTQ5NXEtMTIzIDAtMjIzLjUtODQuNVQxMDI0IDE1NjBxMCAxMTQtMTAxIDE5OC41VDcwMCAxODQzSDIwNXEwLTExNyA2NS0xNzl0MTQyLTYyaDI1MHE1MSAwIDg4LTd0NzEtNjBxMTItMjAgMTAtMTZ6bTE0Ni03MDFoLTk1djg5aDk1djE2NWg5NFY5MDdoOTV2LTg5aC05NVY3MTRoLTk0eiIgZmlsbD0iIzEwMTAxMCIvPjxwYXRoIGQ9Ik03NjEuNTQgMTQwNi42OThsMTIuODU2LTM5LjA1aDQ5OS4yMDhsMTIuODU2IDM5LjA1IDEyLjg1NiAzOS4wNTFINzQ4LjY4NHptMy41MzgtMTU1Ljc1bC0xNy42NTMtMjkuOTIgNDUtMTMuMDY4Yzg0LjY2NC0yNC41ODYgMTcyLjQxLTMzLjU5NSAyNzQuOTY1LTI4LjIzIDU0Ljg4OCAyLjg3MiAxMTMuNDY0IDguOTggMTMwLjE3IDEzLjU3M3M0Ni43NzggMTIuNjA2IDY2LjgzIDE3LjgwNmwzNi40NiA5LjQ1NC0xNy43OTEgMzAuMTUyYy0yMC4zMjcgMzQuNDUyLTIzLjMxIDM0Ljk5My05MS41ODUgMTYuNTg2LTY4LjcyLTE4LjUyNi0yNjYuMjI4LTE4LjUyNi0zMzQuOTQ4IDAtNjguMjMgMTguMzk1LTcxLjI2NiAxNy44NTItOTEuNDQ4LTE2LjM1M3ptMjE1LjUzMi0yNjkuNDd2LTgyLjQ0aC05NS40NTd2LTc4LjEwMmg5NS40NThWNzE2LjhoODYuNzc5djEwNC4xMzZoOTUuNDU4djc4LjEwMWgtOTUuNDU4djE2NC44ODFoLTg2Ljc4eiIgZmlsbD0iI2VjZWNlYyIvPjwvc3ZnPg==",
      "r": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDI0IDE4NDNIMzgzbDI5LTI2NCAxNTktMTE4IDUwLTY1OS0xNDktMTA3LTE3LTM0MWgyODl2MTQ3aDEzN1YzNTRoMjg2djE0N2gxMzdWMzU0aDI4OWwtMTcgMzQxLTE0OSAxMDcgNTAgNjU5IDE1OSAxMTggMjkgMjY0em0wLTk4OWgzMzNsLTYtODhINjk3bC02IDg4em0wIDY0N2gzODFsLTYtODdINjQ5bC02IDg3eiIgZmlsbD0iIzEwMTAxMCIvPjxwYXRoIGQ9Ik02NTAuODQ3IDE0NTcuMDN2LTM5LjA1aDc0Ni4zMDV2NzguMTAxSDY1MC44NDd6bTQzLjM5LTYxOS4zOWMwLTguOTQ4IDIuNDQxLTI4LjQ3NCA1LjQyNC00My4zOWw1LjQyNC0yNy4xMThoNjM3LjgzbDUuNDI0IDI3LjExOWMxMy4wNjYgNjUuMzI5IDQzLjg4IDU5LjY2LTMyNC4zMzkgNTkuNjYtMzE2LjY1IDAtMzI5Ljc2My0uNjQ2LTMyOS43NjMtMTYuMjd6IiBmaWxsPSIjZWNlY2VjIi8+PC9zdmc+",
      "q": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01OTAgMTUxOXE0IDcyLTE1IDE1OGwxMzQtODZ6bTQzNCAzMjRINDQxcTExNC0yMzEgNTcuNS00NTYuNVQyOTYgOTM3cS0xMiAyLTE5IDItNTQgMC05Mi41LTM4LjVUMTQ2IDgwOHQzOC41LTkyLjVUMjc3IDY3N3Q5Mi41IDM4LjVUNDA4IDgwOHEwIDIwLTYgMzgtNCAxNC0xNSAzM2wxOTYgMTM5IDEwMC00ODZxLTY0LTMxLTcyLTEwMy01LTQ0IDI5LTkxdDg4LTUzcTU0LTUgOTYgMjl0NDggODhxNyA2OC00NiAxMTRsMTk4IDQxMiAxOTgtNDEycS01NC00Ni00Ni0xMTQgNi01NCA0OC04OHQ5Ni0yOXE1NCA2IDg3LjUgNTN0MjkuNSA5MXEtOSA3Mi03MiAxMDNsMTAwIDQ4NiAxOTYtMTM5cS0xMi0xOS0xNS0zMy02LTE4LTYtMzggMC01NCAzOC41LTkyLjVUMTc3MSA2Nzd0OTIuNSAzOC41VDE5MDIgODA4dC0zOC41IDkyLjVUMTc3MSA5MzlxLTcgMC0xOS0yLTE0NyAyMjQtMjAzIDQ0OS41dDU4IDQ1Ni41em0wLTQ1MHExMDkgMCAyMjIgMjguNXQyMTMgNjcuNXEyLTQxIDExLTg5LTEwOC00Mi0yMjEuNS02OHQtMjI0LjUtMjYtMjI1IDI2LTIyMSA2OHE4IDQ4IDExIDg5IDk5LTM5IDIxMi02Ny41dDIyMy0yOC41em0wIDM3Nmg0NzhxLTE1LTM0LTI0LTczSDU3MHEtMTAgMzktMjQgNzN6bTQzNC0yNTBsLTExOSA3MiAxMzQgODZxLTIwLTg2LTE1LTE1OHptLTU3MyA0N2wxMzkgODcgMTM5LTg0LTEzOS04NnoiIGZpbGw9IiMxMDEwMTAiLz48cGF0aCBkPSJNNTU1LjM5IDE3NTguNTgzYzAtMS42NzQgNC4yODctMTUuMzQyIDkuNTI3LTMwLjM3M2w5LjUyNy0yNy4zMjloODk5LjExMmw5LjUyNyAyNy4zM2M1LjI0IDE1LjAzIDkuNTI3IDI4LjY5OCA5LjUyNyAzMC4zNzJzLTIxMC44NzQgMy4wNDQtNDY4LjYxIDMuMDQ0LTQ2OC42MS0xLjM3LTQ2OC42MS0zLjA0NHptMzk2Ljk3My0xNTYuMTUxbC01OC42Mi0zNy4yNTIgNjUuMTM3LTM3LjI3IDY1LjEzNy0zNy4yNjggNjAuNzM3IDM2LjA4NGMzMy40MDYgMTkuODQ1IDYwLjY2MyAzOC44MzcgNjAuNTcxIDQyLjIwNC0uMjMgOC41MS0xMDguODg2IDcxLjI1Ny0xMjIuOTEgNzAuOTgtNi4yODgtLjEyNC0zNy44MTEtMTYuOTktNzAuMDUyLTM3LjQ3OHptNDYwLjU2IDMwLjIzNmMtMjcuMTIzLTE3LjM3MS00OS4zODUtMzUuNDg4LTQ5LjQ3Mi00MC4yNjEtLjA4Ni00Ljc3MyAyMC4xNTMtMjEuNTA3IDQ0Ljk3Ni0zNy4xODZsNDUuMTMyLTI4LjUwOSA1LjIwMyA2Ny41NmMyLjg2MSAzNy4xNTcgNC44MTQgNjguMTAzIDQuMzM5IDY4Ljc2OC0uNDc1LjY2Ni0yMy4wNTUtMTMuMDAyLTUwLjE3OC0zMC4zNzJ6TTU4OC44IDE0NTIuNTMxYy0uNzE2LTE2LjE0LTEuNjkyLTMzLjY0MS0yLjE3LTM4Ljg5My0yLjA5NS0yMy4wNTMgMjAzLjkyMi04MC43ODYgMzQzLjc3NC05Ni4zMzcgNzIuMDI0LTguMDA5IDExNC42ODctOC4wODUgMTg0LjA3Ny0uMzMxIDE0MC41NzMgMTUuNzA4IDM0OC45NjggNzMuNzgyIDM0Ni44ODkgOTYuNjY4LS40NzggNS4yNTItMS40NTQgMjIuNzUzLTIuMTcgMzguODkzbC0xLjMwMiAyOS4zNDUtMTAxLjk2Ni0zMi41OTNjLTEzMy45MTctNDIuODA0LTIxMC44MDYtNTUuNzA5LTMzMS45MzItNTUuNzA5cy0xOTguMDE1IDEyLjkwNS0zMzEuOTMyIDU1LjcxbC0xMDEuOTY2IDMyLjU5MXptLTEuMTUgMTUwLjIyNmMyLjExMi0zNC4zMyA0LjUyNC02NS40MSA1LjM2Mi02OS4wNjcuODM3LTMuNjU3IDI0LjI1IDcuNTY4IDUyLjAzIDI0Ljk0NCAyNy43OCAxNy4zNzYgNDcuMjg0IDM0LjU5MyA0My4zNDMgMzguMjYtMy45NCAzLjY2OC0yOS4wODEgMjAuNTMyLTU1Ljg2OSAzNy40NzVsLTQ4LjcwNCAzMC44MDZ6IiBmaWxsPSIjZWNlY2VjIi8+PC9zdmc+",
      "k": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDI0IDE3NjloNDg5bC0xMi03M0g1NDdsLTEyIDczem0wLTkyMXEtMjUtNjAtNjItMTExIDMxLTQ4IDYyLTY1IDMwIDE3IDYyIDY1LTM4IDUxLTYyIDExMXptLTk3IDQ1NHEtMTU0IDExLTMwMyA1OC0xMjMtMTA4LTIwMC0yMTMuNVQzNDcgOTQ1cTAtODkgNzMuNS0xNTlUNTY5IDcxNnE2NyAwIDEzNC41IDYyLjVUODA2IDkwOXEzMCA1NCA3NSAxNzV0NDYgMjE4em0tMzUwIDIxN2wtMjYgMTU2IDE0NS04NHptNDQ3LTkwN3EtNDcgMC0xMzYgMTIxLTMxLTM2LTUwLTU1IDkzLTE0MCAxODYtMTQwIDkyIDAgMTg2IDE0MC0yMCAxOS01MCA1NS05MC0xMjEtMTM2LTEyMXptMCA3NzVxLTEtMTI2LTQyLTI2Ny41VDg5OCA4OTNxLTgtMTQtMTQtMjd0LTEyLTIzcS0yOC00My00OC02OS01MS02My0xMjAtMTA1dC0xMzQtNDJxLTEwMyAwLTIwOCA5M1QyNTcgOTQ5cTAgMTIwIDk5IDI1NC41VDYwNSAxNDYzcTIwMS03NCA0MTktNzZ6bTAgNDU2SDQ0OGw2MS0zNjVxLTMyNS0yODAtMzI2LTUzNS0xLTE1OSAxMjUtMjc0LjVUNTc1IDU1M3E3OCAwIDE1OC41IDQ3VDg3NiA3MTlxNjEgNzQgOTguNSAxNjQuNVQxMDI0IDEwMzRxMTItNjAgNDktMTUwLjV0OTktMTY0LjVxNjEtNzIgMTQyLTExOXQxNTktNDdxMTQwIDAgMjY2IDExNS41VDE4NjUgOTQzcS0yIDI1NS0zMjYgNTM1bDYxIDM2NXptOTctNTQxcTAtOTcgNDUtMjE4dDc2LTE3NXEzNC02OCAxMDEuNS0xMzAuNVQxNDc5IDcxNnE3NCAwIDE0Ny41IDcwdDc0LjUgMTU5cTAgOTYtNzcgMjAxLjVUMTQyNCAxMzYwcS0xNTAtNDctMzAzLTU4em0zNTAgMjE3bC0xMTkgNzIgMTQ1IDg0em0tNDQ3LTEzMnEyMTcgMiA0MTkgNzYgMTUwLTEyNSAyNDktMjU5LjV0OTktMjU0LjVxMC0xMzYtMTA1LjUtMjI5VDE0NzggNjI3cS02NiAwLTEzNSA0MnQtMTE5IDEwNXEtMjEgMjYtNDggNjktNiAxMC0xMi41IDIzbC0xMy41IDI3cS00NCA4NS04NSAyMjYuNXQtNDEgMjY3LjV6bS0xMzkgMTU5bDEzOSA4NiAxMzktODQtMTM5LTg2em05Mi0xMjQ4di05NWg5NHY5NWgxMDd2OTVoLTEwN3YxNTNxLTQ4LTE2LTk0IDBWMzkzSDg3MHYtOTV6IiBmaWxsPSIjMTAxMDEwIi8+PHBhdGggZD0iTTE0MDEuNDkyIDE0NDUuMDIyYy03OC44NjYtMjcuOTcyLTI4MC44NS02My40OS0zNjEuMDU1LTYzLjQ5LTEzLjU3MyAwLTguMzctOTIuOTM4IDkuOTMxLTE3Ny40MSA0Ni41NDEtMjE0LjgxNSAxMzQuNDczLTM5Ny42NiAyMzEuNDgtNDgxLjMzNyAxMDQuMjg3LTg5Ljk1OCAyMDIuNDI1LTExMC4yOTIgMzAxLjg4LTYyLjU1IDEwMS43MDcgNDguODIzIDE2OC44NTcgMTI2LjQ3NiAxOTIuNjExIDIyMi43MzYgMTEuOTUzIDQ4LjQzNCAxMi41MDcgNjUuODM1IDMuNjMzIDExMy45OTUtMjAuMDQ3IDEwOC44LTgxLjM3OSAyMDUuMzU5LTIyMS4yMzYgMzQ4LjMwNC0xMDkuOTk3IDExMi40MjUtMTE0LjEyNyAxMTUuMDQ1LTE1Ny4yNDQgOTkuNzUyem0xMjIuODE3LTE3OS42NmMxMzQuNzYxLTE0MS40NjQgMTc1LjQ4My0yMTQuNDYyIDE3Ni4xOTItMzE1LjgzNy40NjgtNjcuMDM3LTEzLjQzNC0xMDEuODM2LTYxLjUyNS0xNTQuMDA4LTE0My40MS0xNTUuNTgxLTMxNS4xMDQtODMuNDUyLTQzNC4zOTggMTgyLjQ5LTQyLjYyIDk1LjAxNS03Ni40ODcgMjA2LjA5Ny04Mi41MTUgMjcwLjY1LTUuNzA3IDYxLjEwOS0xMC4yMzIgNTcuNDkzIDg0LjgwNCA2Ny43NjYgMjYuNTk3IDIuODc1IDgzLjIyMSAxNC4zNzYgMTI1LjgzIDI1LjU1N3M4MS45NzQgMjAuNzUgODcuNDc3IDIxLjI2M2M1LjUwMi41MTMgNTIuMzYzLTQzLjUzMyAxMDQuMTM1LTk3Ljg4em0tMTAwMS42MTYgMTEzLjRjLTIzOS44MzktMjMwLjkzMy0zMDguMTEtNDAyLjY1Ni0yMjUuNjg5LTU2Ny42ODYgMTAuNzA0LTIxLjQzNCA0MS4wMDMtNTguNjcxIDY3LjMzLTgyLjc1IDEwMy4zODctOTQuNTU1IDIwOS4xNzItMTE3LjU3NCAzMDguOTkyLTY3LjIzNyAxMDQuOTQgNTIuOTIgMTc3LjM0OSAxMzcuMjI3IDIzNy45MjYgMjc3LjAyNSA1OC41MjggMTM1LjA2OCAxMDQuMDcgMzEwLjE1NiAxMDQuMDcgNDAwLjEwMXY0MS45MzZsLTU4LjU3NiA1LjMzOWMtMTA0LjAwNiA5LjQ4LTIxNC43ODEgMjkuNTg3LTI4My44NjQgNTEuNTI0bC02Ny40NDUgMjEuNDE4em0xODYuMzgzLTM1Ljg3NGM0Ni43MjctMTEuNzA5IDEwNi40MzYtMjMuNjYgMTMyLjY4Ny0yNi41NTggOTUuMDIzLTEwLjQ5MiA4OS45MTQtNi4yMDcgODMuOTItNzAuMzk4LTYuNjE3LTcwLjg2LTU2LjQ1Ny0yMTguODI4LTEwNi40NTMtMzE2LjA0OC04OC4zNTItMTcxLjgwNC0yMTAuMDY4LTI0OS4wMTUtMzIwLjA4NC0yMDMuMDQ3LTQ0LjE2IDE4LjQ1MS0xMTYuNDM3IDg3LjQ5NS0xMzUuNzUyIDEyOS42NzgtMTkuMDUxIDQxLjYwNy0yMC45ODcgMTMyLjE4NS0zLjg1MiAxODAuMjA4IDIyLjY1NSA2My40OTMgNzEuMDc2IDEzMC45MzcgMTY0LjE0OSAyMjguNjQgNTEuNzcyIDU0LjM0NyA5NS41NDggOTguODEzIDk3LjI4IDk4LjgxMyAxLjczIDAgNDEuMzc4LTkuNTggODguMTA1LTIxLjI4OHptMjk0LjI5OC0zOTMuMTQ4Yy0xNi41MjItNTAuNTU2LTcyLjA1My0xNjQuMTk2LTk3LjMxNC0xOTkuMTQ0LTEzLjM1Mi0xOC40NzItMTEuOTAxLTIxLjEyMSA0MS41NzktNzUuOTMzIDM4LjAwNC0zOC45NSA2MS45OTQtNTYuNzkyIDc2LjM2MS01Ni43OTJzMzguMzU3IDE3Ljg0MyA3Ni4zNjEgNTYuNzkyYzUzLjcxNyA1NS4wNTUgNTQuOTggNTcuMzc5IDQxLjI4IDc1LjkzMy0yNC4wMjEgMzIuNTMyLTk5Ljc0NCAxOTEuMTI4LTEwNS40NyAyMjAuOTAyLTIuOTg0IDE1LjUxMi03LjkxOSAyOC4xNzUtMTAuOTY3IDI4LjE0LTMuMDQ5LS4wMzQtMTIuODcyLTIyLjQ4OC0yMS44My00OS44OTd6bTU2LjY2Ny0xNTcuNjhsMzEuNzAyLTU5LjgxOC0yOC41MzMtMzEuMTUyYy0xNS42OTQtMTcuMTMzLTMzLjMzOC0zMS4xNTEtMzkuMjEtMzEuMTUxcy0yMy41MTYgMTQuMDE4LTM5LjIxIDMxLjE1MWwtMjguNTMzIDMxLjE1MiAzMS43MDIgNTkuODE4YzE3LjQzNiAzMi45IDMzLjY1NSA1OS44MTkgMzYuMDQxIDU5LjgxOXMxOC42MDUtMjYuOTE4IDM2LjA0MS01OS44MTl6bS05OC45NTYgNzk1LjQ5NmMtMzIuMjE3LTIwLjEzNi01OC41NDMtMzguNjA3LTU4LjUwMi00MS4wNDYuMDQtMi40NCAyNy4wNjYtMjEuMDg3IDYwLjA1Ny00MS40MzhsNTkuOTgzLTM3LjAwMyA2MS40MzQgMzYuOTU4YzMzLjc5IDIwLjMyNyA2MS40MzQgMzkuNDYyIDYxLjQzNCA0Mi41MjIgMCA0LjkxNS0xMTUuODQ0IDc3LjIzNS0xMjMuMDA4IDc2Ljc5Mi0xLjU1Mi0uMDk2LTI5LjE4MS0xNi42NS02MS4zOTgtMzYuNzg1em0tNDAyLjMwOCA2NC43NjNjMi4zNjYtOC4xMzMgNi45NjMtMzQuMzEyIDEwLjIxNS01OC4xNzcgOC45OTQtNjYgMTEuMDQtNjcuMTkxIDYyLjMzLTM2LjI4NiAyNS4wNTggMTUuMDk5IDQ1LjU2IDI5LjkxMSA0NS41NiAzMi45MTdzLTI3LjU0MiAyMS40MS02MS4yMDQgNDAuODk4Yy00NS4xMTcgMjYuMTItNjAuMDczIDMxLjU0OC01Ni45MDEgMjAuNjQ4em04NzMuMDg3LTIwLjU5N2MtMzEuMDIzLTE4LjMwNC01Ny4zOTItMzYuMjMtNTguNTk4LTM5LjgzNC0yLjQ0Ny03LjMyMSA4Ni45NDYtNjMuNDA5IDkyLjM4OS01Ny45NjYgMy40MTcgMy40MTcgMjYuNDYzIDEyOC45NzQgMjMuOTI4IDEzMC4zNjItLjcyMS4zOTYtMjYuNjk1LTE0LjI1Ny01Ny43MTktMzIuNTYyek01NDUuMDY1IDE3MzIuOTlsMy41NDYtMzAuMzczaDk1MC43NzlsMy41NDUgMzAuMzczIDMuNTQ2IDMwLjM3M0g1NDEuNTE5eiIgZmlsbD0iI2VjZWNlYyIvPjwvc3ZnPg=="
    }
  }
}