export interface MenuData {
    Caption: string;
    Level: number;
    OriginalCaptionion: string;
    Id: string;
    Type: number;
    Children: MenuData[];
    HintText: string;
    Action: any;
    Icon: string;
    Opened: boolean;
}

export class DrawerMenuFakeData {

    static generateData(): any {
        return `[{
            "Caption": "CarLo Menü",
            "OriginalCaption": "CarLo Menü",
            "Id": "9000",
            "Type": "Category",
            "HintText": "",
            "Level": 0,
            "Children": [{
                "Caption": "Ansicht",
                "OriginalCaption": "Ansicht",
                "Id": "9004",
                "Type": "Folder",
                "HintText": "",
                "Level": 1,
                "Children": [{
                    "Caption": "Navigationsleiste",
                    "OriginalCaption": "Navigationsleiste",
                    "Id": "9025",
                    "Type": "Dialog",
                    "HintText": "",
                    "Level": 2,
                    "Children": null
                },
                    {
                        "Caption": "Favoritenleiste",
                        "OriginalCaption": "Favoritenleiste",
                        "Id": "9030",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 2,
                        "Children": null
                    },
                    {
                        "Caption": "Hintergrundbild",
                        "OriginalCaption": "Hintergrundbild",
                        "Id": "9026",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 2,
                        "Children": null
                    }
                ]
            },
                {
                    "Caption": "Anpassen",
                    "OriginalCaption": "Anpassen",
                    "Id": "9010",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Passwort ändern",
                        "OriginalCaption": "Passwort ändern",
                        "Id": "9011",
                        "Type": "Dialog",
                        "HintText": "Ändert das Passwort des aktuell angemeldeten Benutzers.",
                        "Level": 2,
                        "Children": null
                    },
                        {
                            "Caption": "Sprache ändern",
                            "OriginalCaption": "Sprache ändern",
                            "Id": "9012",
                            "Type": "Dialog",
                            "HintText": "Sprache ändern",
                            "Level": 2,
                            "Children": null
                        },
                        {
                            "Caption": "Globale Konfiguration aktualisieren",
                            "OriginalCaption": "Globale Konfiguration aktualisieren",
                            "Id": "9013",
                            "Type": "Dialog",
                            "HintText": "Globale Konfiguration aktualisieren",
                            "Level": 2,
                            "Children": null
                        }
                    ]
                },
                {
                    "Caption": "Hilfe",
                    "OriginalCaption": "Hilfe",
                    "Id": "9015",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Info über Installierte Entfernungswerke ",
                        "OriginalCaption": "Info über Installierte Entfernungswerke ",
                        "Id": "9031",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 2,
                        "Children": null
                    },
                        {
                            "Caption": "Problemaufzeichnung",
                            "OriginalCaption": "Problemaufzeichnung",
                            "Id": "9028",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": null
                        }
                    ]
                },
                {
                    "Caption": "Supportanfrage",
                    "OriginalCaption": "Supportanfrage",
                    "Id": "9032",
                    "Type": "Dialog",
                    "HintText": "Supportanfrage",
                    "Level": 1,
                    "Children": null
                },
                {
                    "Caption": "CarLo exCHANGE",
                    "OriginalCaption": "CarLo exCHANGE",
                    "Id": "9024",
                    "Type": "Dialog",
                    "HintText": "CarLo exCHANGE",
                    "Level": 1,
                    "Children": null
                },
                {
                    "Caption": "CarLo Marketplace",
                    "OriginalCaption": "CarLo Marketplace",
                    "Id": "9023",
                    "Type": "Dialog",
                    "HintText": "CarLo Marketplace",
                    "Level": 1,
                    "Children": null
                },
                {
                    "Caption": "Fernwartung",
                    "OriginalCaption": "Fernwartung",
                    "Id": "9019",
                    "Type": "Dialog",
                    "HintText": "",
                    "Level": 1,
                    "Children": null
                }
            ]
        },
            {
                "Caption": "Administration",
                "OriginalCaption": "Administration",
                "Id": "10000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Organisation",
                    "OriginalCaption": "Organisation",
                    "Id": "10020",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Mandanten",
                        "OriginalCaption": "Mandanten",
                        "Id": "10001",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 2,
                        "Children": [{
                            "Caption": "Mandant (Soloplan-Vorgabe)",
                            "OriginalCaption": "Mandant (Soloplan-Vorgabe)",
                            "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa",
                            "Type": "Layout",
                            "HintText": "Mandant (Soloplan-Vorgabe)",
                            "Level": 3,
                            "Children": [{
                                "Caption": "Mandanten",
                                "OriginalCaption": "Mandanten",
                                "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 4,
                                "Children": null
                            },
                                {
                                    "Caption": "Abrechnung",
                                    "OriginalCaption": "Abrechnung",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{90E58ED5-E086-41DD-A6BE-AB8C6EF9A41B}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Faktura",
                                    "OriginalCaption": "Faktura",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{9E821942-1050-4889-B4D8-41421B3DAFD2}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Fibu",
                                    "OriginalCaption": "Fibu",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{1F2818A6-269E-4539-A466-11A81F7CF103}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "OP-Verwaltung",
                                    "OriginalCaption": "OP-Verwaltung",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{9244DFA4-9C08-4EF9-AF47-431C665D0694}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Zahlungsverkehr",
                                    "OriginalCaption": "Zahlungsverkehr",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{2973B75A-7B87-46DE-B4F6-764BDB2DCDAF}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Nummernkreise",
                                    "OriginalCaption": "Nummernkreise",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{0A81529E-F3DD-467A-B30A-04A8FABACB5B}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Buchungsperioden",
                                    "OriginalCaption": "Buchungsperioden",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{356EEE20-A718-4147-84DF-7189EAFFADFE}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Berichte",
                                    "OriginalCaption": "Berichte",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{3509B577-CFF3-467B-BBF6-062DB6822443}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Entfernungswerke",
                                    "OriginalCaption": "Entfernungswerke",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{9DC4C2A6-3ACD-4885-9D40-519A7B5BAC80}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Restriktionen",
                                    "OriginalCaption": "Restriktionen",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{34A11D6D-C3C8-42A6-847A-512A26DADF0F}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Details",
                                    "OriginalCaption": "Details",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{421A4703-D438-4689-A9A5-A75BA52DB054}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Bollo",
                                    "OriginalCaption": "Bollo",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{253C0893-70DA-4998-B6D7-6C1D54A480BC}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "NVE/MTV",
                                    "OriginalCaption": "NVE/MTV",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{1FE480F1-B0D6-422E-A376-44ECAFF1E858}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Digitale Tachokarten",
                                    "OriginalCaption": "Digitale Tachokarten",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{EE5EBBE9-2DF2-4229-BB8A-2B6805167761}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Benutzerdefinierte Felder",
                                    "OriginalCaption": "Benutzerdefinierte Felder",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_700000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Rückverteilung",
                                    "OriginalCaption": "Rückverteilung",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{1FFEEFAD-3C21-44ED-BABB-6CBB8AC62CC6}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Infofelder",
                                    "OriginalCaption": "Infofelder",
                                    "Id": "7d5d7fb9-3986-45b9-8624-b7b0409fbefa_LayoutControlGroup_85000_{AA72C870-72CA-4367-AD3F-DFB076328719}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }
                            ]
                        }]
                    },
                        {
                            "Caption": "Organisationseinheiten",
                            "OriginalCaption": "Organisationseinheiten",
                            "Id": "10021",
                            "Type": "Dialog",
                            "HintText": "Organisationseinheiten",
                            "Level": 2,
                            "Children": [{
                                "Caption": "OrganizationalUnit (Soloplan-Vorgabe)",
                                "OriginalCaption": "OrganizationalUnit (Soloplan-Vorgabe)",
                                "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb",
                                "Type": "Layout",
                                "HintText": "OrganizationalUnit (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Organisation",
                                    "OriginalCaption": "Organisation",
                                    "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb_LayoutControlGroup_5004700_{6D89A172-10E1-4B39-A5E5-816C186437F6}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Mandant",
                                        "OriginalCaption": "Mandant",
                                        "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb_LayoutControlGroup_5004700_{E718FD2C-2E51-4D6C-9F13-826377C855E2}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Organisation",
                                        "OriginalCaption": "Organisation",
                                        "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb_LayoutControlGroup_5004700_{9722C22F-CA57-4E9B-AFFE-0A83B158FD03}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzer",
                                        "OriginalCaption": "Benutzer",
                                        "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb_LayoutControlGroup_5004700_{EA99343A-FAD7-4B72-BD2F-CCD81341C793}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Infofelder",
                                        "OriginalCaption": "Infofelder",
                                        "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb_LayoutControlGroup_5004700_{FCC73943-654A-4EF0-814F-B922450C58F9}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Nummernkreise",
                                        "OriginalCaption": "Nummernkreise",
                                        "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb_LayoutControlGroup_5004700_{EDCD79F1-1FAF-4ED1-96ED-68FC17A91583}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "f4a44edc-d8b1-43d1-a67c-e076e4fa5feb_LayoutControlGroup_5004700_700000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        }
                    ]
                },
                    {
                        "Caption": "Benutzer",
                        "OriginalCaption": "Benutzer",
                        "Id": "10002",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Benutzer",
                            "OriginalCaption": "Benutzer",
                            "Id": "10004",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Benutzer(Soloplan-Vorgabe)",
                                "OriginalCaption": "Benutzer(Soloplan-Vorgabe)",
                                "Id": "bded495f-b77f-4388-949d-49a9491171a1",
                                "Type": "Layout",
                                "HintText": "Benutzer(Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Benutzer",
                                    "OriginalCaption": "Benutzer",
                                    "Id": "bded495f-b77f-4388-949d-49a9491171a1_LayoutControlGroup_100000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Rollen",
                                        "OriginalCaption": "Rollen",
                                        "Id": "bded495f-b77f-4388-949d-49a9491171a1_LayoutControlGroup_100000_100007",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Organisationseinheiten",
                                        "OriginalCaption": "Organisationseinheiten",
                                        "Id": "bded495f-b77f-4388-949d-49a9491171a1_LayoutControlGroup_100000_100006",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Passwortverwaltung",
                                        "OriginalCaption": "Passwortverwaltung",
                                        "Id": "bded495f-b77f-4388-949d-49a9491171a1_LayoutControlGroup_100000_{16BB257B-1DB5-4FAE-914B-66EC0D4908EA}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "bded495f-b77f-4388-949d-49a9491171a1_LayoutControlGroup_100000_700000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Benutzergruppen",
                                "OriginalCaption": "Benutzergruppen",
                                "Id": "10003",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Benutzergruppe (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Benutzergruppe (Soloplan-Vorgabe)",
                                    "Id": "c07eaa50-45bf-4d3a-8d68-79925a9438d5",
                                    "Type": "Layout",
                                    "HintText": "Benutzergruppe (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Benutzergruppe",
                                        "OriginalCaption": "Benutzergruppe",
                                        "Id": "c07eaa50-45bf-4d3a-8d68-79925a9438d5_LayoutControlGroup_5000100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzer",
                                            "OriginalCaption": "Benutzer",
                                            "Id": "c07eaa50-45bf-4d3a-8d68-79925a9438d5_LayoutControlGroup_5000100_{9A8F2B69-6159-4045-98DC-0284D42AD9D8}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "c07eaa50-45bf-4d3a-8d68-79925a9438d5_LayoutControlGroup_5000100_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Rollen",
                                "OriginalCaption": "Rollen",
                                "Id": "10554",
                                "Type": "Dialog",
                                "HintText": "Dialog zum Bearbeiten von Rollen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Rollen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Rollen (Soloplan-Vorgabe)",
                                    "Id": "697d2d67-f494-4e43-bb00-45a6599451a4",
                                    "Type": "Layout",
                                    "HintText": "Rollen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Rollen",
                                        "OriginalCaption": "Rollen",
                                        "Id": "697d2d67-f494-4e43-bb00-45a6599451a4_LayoutControlGroup_5009000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzer",
                                            "OriginalCaption": "Benutzer",
                                            "Id": "697d2d67-f494-4e43-bb00-45a6599451a4_LayoutControlGroup_5009000_5009004",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Datenrechte",
                                            "OriginalCaption": "Datenrechte",
                                            "Id": "697d2d67-f494-4e43-bb00-45a6599451a4_LayoutControlGroup_5009000_5009005",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Gültigkeit",
                                            "OriginalCaption": "Gültigkeit",
                                            "Id": "697d2d67-f494-4e43-bb00-45a6599451a4_LayoutControlGroup_5009000_5009015",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Aktionsrechte",
                                            "OriginalCaption": "Aktionsrechte",
                                            "Id": "697d2d67-f494-4e43-bb00-45a6599451a4_LayoutControlGroup_5009000_5009006",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Menü/Register-Rechte",
                                            "OriginalCaption": "Menü/Register-Rechte",
                                            "Id": "697d2d67-f494-4e43-bb00-45a6599451a4_LayoutControlGroup_5009000_5009007",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Protokollierung Sicherheit",
                                "OriginalCaption": "Protokollierung Sicherheit",
                                "Id": "10404",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "SecurityEventLog (Soloplan-Vorgabe)",
                                    "OriginalCaption": "SecurityEventLog (Soloplan-Vorgabe)",
                                    "Id": "83668e25-22d9-4f6b-98d7-809098ffd39b",
                                    "Type": "Layout",
                                    "HintText": "SecurityEventLog (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Passwort-Protokoll",
                                        "OriginalCaption": "Passwort-Protokoll",
                                        "Id": "83668e25-22d9-4f6b-98d7-809098ffd39b_LayoutControlGroup_5068600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Berechtigungsübersicht",
                                "OriginalCaption": "Berechtigungsübersicht",
                                "Id": "10555",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "RoleMatrix (Soloplan-Vorgabe)",
                                    "OriginalCaption": "RoleMatrix (Soloplan-Vorgabe)",
                                    "Id": "2682d35f-c24b-490f-a58b-1f91fc0a3953",
                                    "Type": "Layout",
                                    "HintText": "RoleMatrix (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Berechtigungsübersicht",
                                        "OriginalCaption": "Berechtigungsübersicht",
                                        "Id": "2682d35f-c24b-490f-a58b-1f91fc0a3953_LayoutControlGroup_5059900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Konfigurationsverteilung",
                                "OriginalCaption": "Konfigurationsverteilung",
                                "Id": "10444",
                                "Type": "Dialog",
                                "HintText": "Plugin für die Verteilung von Einstellungen und Favoriten",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Angemeldete Benutzer",
                                "OriginalCaption": "Angemeldete Benutzer",
                                "Id": "10005",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Angemeldete Benutzer (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Angemeldete Benutzer (Soloplan-Vorgabe)",
                                    "Id": "51df53bc-51cb-41b2-9080-9fd470089301",
                                    "Type": "Layout",
                                    "HintText": "Angemeldete Benutzer (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Angemeldete Benutzer",
                                        "OriginalCaption": "Angemeldete Benutzer",
                                        "Id": "51df53bc-51cb-41b2-9080-9fd470089301_LayoutControlGroup_5036800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Berichte",
                        "OriginalCaption": "Berichte",
                        "Id": "10100",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Berichte",
                            "OriginalCaption": "Berichte",
                            "Id": "10102",
                            "Type": "Dialog",
                            "HintText": "Berichte",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Berichte (Soloplan-Vorgabe)",
                                "OriginalCaption": "Berichte (Soloplan-Vorgabe)",
                                "Id": "f04db327-6d4b-4797-8fc5-3860aea80a98",
                                "Type": "Layout",
                                "HintText": "Berichte (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Berichte",
                                    "OriginalCaption": "Berichte",
                                    "Id": "f04db327-6d4b-4797-8fc5-3860aea80a98_LayoutControlGroup_5024200",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Schachteinstellungen",
                                        "OriginalCaption": "Schachteinstellungen",
                                        "Id": "f04db327-6d4b-4797-8fc5-3860aea80a98_LayoutControlGroup_5024200_{66A4D9D5-8AC0-4ea2-8C78-20D34333E828}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Berichtsgruppen",
                                "OriginalCaption": "Berichtsgruppen",
                                "Id": "10101",
                                "Type": "Dialog",
                                "HintText": "Berichtsgruppen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Berichtsgruppe (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Berichtsgruppe (Soloplan-Vorgabe)",
                                    "Id": "5e25dd65-1a3b-40e9-9cf5-8267f27c6096",
                                    "Type": "Layout",
                                    "HintText": "Berichtsgruppe (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Berichtsgruppe",
                                        "OriginalCaption": "Berichtsgruppe",
                                        "Id": "5e25dd65-1a3b-40e9-9cf5-8267f27c6096_LayoutControlGroup_5012400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Archivierung",
                                "OriginalCaption": "Archivierung",
                                "Id": "10827",
                                "Type": "Dialog",
                                "HintText": "Archivierungsschnittstellen",
                                "Level": 2,
                                "Children": null
                            }
                        ]
                    },
                    {
                        "Caption": "Datenbank",
                        "OriginalCaption": "Datenbank",
                        "Id": "10200",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Protokollierung",
                            "OriginalCaption": "Protokollierung",
                            "Id": "10800",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Protokollierung Konfiguration",
                                "OriginalCaption": "Protokollierung Konfiguration",
                                "Id": "10811",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Protokollierung Konfiguration (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Protokollierung Konfiguration (Soloplan-Vorgabe)",
                                    "Id": "3924588a-7141-4f84-9ff2-2b005aae613a",
                                    "Type": "Layout",
                                    "HintText": "Protokollierung Konfiguration (Soloplan-Vorgabe)",
                                    "Level": 4,
                                    "Children": [{
                                        "Caption": "Protokollierung Konfiguration",
                                        "OriginalCaption": "Protokollierung Konfiguration",
                                        "Id": "3924588a-7141-4f84-9ff2-2b005aae613a_LayoutControlGroup_5058400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 5,
                                        "Children": null
                                    }]
                                }]
                            },
                                {
                                    "Caption": "Protokollierungsgruppen",
                                    "OriginalCaption": "Protokollierungsgruppen",
                                    "Id": "10813",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "LoggingGroup (Soloplan-Vorgabe)",
                                        "OriginalCaption": "LoggingGroup (Soloplan-Vorgabe)",
                                        "Id": "327f5f77-dc6f-437a-9dfe-fdef97d1b37a",
                                        "Type": "Layout",
                                        "HintText": "LoggingGroup (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Protokollierungsgruppen",
                                            "OriginalCaption": "Protokollierungsgruppen",
                                            "Id": "327f5f77-dc6f-437a-9dfe-fdef97d1b37a_LayoutControlGroup_5060800",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Protokollierung",
                                    "OriginalCaption": "Protokollierung",
                                    "Id": "10812",
                                    "Type": "Dialog",
                                    "HintText": "Protokollierung",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Protokollierung (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Protokollierung (Soloplan-Vorgabe)",
                                        "Id": "ee8f856f-f802-439c-b542-029c9fa62986",
                                        "Type": "Layout",
                                        "HintText": "Protokollierung (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Protokollierung",
                                            "OriginalCaption": "Protokollierung",
                                            "Id": "ee8f856f-f802-439c-b542-029c9fa62986_LayoutControlGroup_5060000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Protokollierung Communication Server",
                                    "OriginalCaption": "Protokollierung Communication Server",
                                    "Id": "10814",
                                    "Type": "Dialog",
                                    "HintText": "Protokollierung Communication Server",
                                    "Level": 3,
                                    "Children": null
                                }
                            ]
                        },
                            {
                                "Caption": "Datenbank verwalten",
                                "OriginalCaption": "Datenbank verwalten",
                                "Id": "10202",
                                "Type": "Dialog",
                                "HintText": "Datenbank verwalten",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Oracle Session-Metriken",
                                "OriginalCaption": "Oracle Session-Metriken",
                                "Id": "10821",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Session Snapshots (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Session Snapshots (Soloplan-Vorgabe)",
                                    "Id": "74fc7ca1-32d6-46ff-ac0d-2cb858bf3159",
                                    "Type": "Layout",
                                    "HintText": "Session Snapshots (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "SessionSnapshot",
                                        "OriginalCaption": "SessionSnapshot",
                                        "Id": "74fc7ca1-32d6-46ff-ac0d-2cb858bf3159_LayoutControlGroup_5715800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Metriken",
                                            "OriginalCaption": "Metriken",
                                            "Id": "74fc7ca1-32d6-46ff-ac0d-2cb858bf3159_LayoutControlGroup_5715800_5715808",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Cache-Konfiguration Geschäftsobjekte",
                                "OriginalCaption": "Cache-Konfiguration Geschäftsobjekte",
                                "Id": "10206",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Cache-Konfiguration (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Cache-Konfiguration (Soloplan-Vorgabe)",
                                    "Id": "6edae872-1000-407e-97a3-18bedb0238c7",
                                    "Type": "Layout",
                                    "HintText": "Cache-Konfiguration (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Cache-Konfigurationen",
                                        "OriginalCaption": "Cache-Konfigurationen",
                                        "Id": "6edae872-1000-407e-97a3-18bedb0238c7_LayoutControlGroup_5716000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Lizenzierung",
                        "OriginalCaption": "Lizenzierung",
                        "Id": "10300",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Lizenz",
                            "OriginalCaption": "Lizenz",
                            "Id": "10301",
                            "Type": "Dialog",
                            "HintText": "Lizenz",
                            "Level": 2,
                            "Children": null
                        },
                            {
                                "Caption": "Freischaltungen",
                                "OriginalCaption": "Freischaltungen",
                                "Id": "10302",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Freischaltungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Freischaltungen (Soloplan-Vorgabe)",
                                    "Id": "fa571915-8bed-4273-af13-3e75cf1178d1",
                                    "Type": "Layout",
                                    "HintText": "Freischaltungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Freischaltungen",
                                        "OriginalCaption": "Freischaltungen",
                                        "Id": "fa571915-8bed-4273-af13-3e75cf1178d1_LayoutControlGroup_120000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Einstellungen",
                        "OriginalCaption": "Einstellungen",
                        "Id": "10400",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Steuer",
                            "OriginalCaption": "Steuer",
                            "Id": "10410",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Steuerarten",
                                "OriginalCaption": "Steuerarten",
                                "Id": "10411",
                                "Type": "Dialog",
                                "HintText": "Steuerarten",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Steuerarten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Steuerarten (Soloplan-Vorgabe)",
                                    "Id": "a4041719-7220-424b-9c1b-8b923178e829",
                                    "Type": "Layout",
                                    "HintText": "Steuerarten (Soloplan-Vorgabe)",
                                    "Level": 4,
                                    "Children": [{
                                        "Caption": "Steuerarten",
                                        "OriginalCaption": "Steuerarten",
                                        "Id": "a4041719-7220-424b-9c1b-8b923178e829_LayoutControlGroup_5001900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 5,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Externe Referenzen",
                                            "OriginalCaption": "Externe Referenzen",
                                            "Id": "a4041719-7220-424b-9c1b-8b923178e829_LayoutControlGroup_5001900_{BE499307-5C8D-4391-9A2A-0BA761C633F4}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "a4041719-7220-424b-9c1b-8b923178e829_LayoutControlGroup_5001900_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                                {
                                    "Caption": "Steuertexte",
                                    "OriginalCaption": "Steuertexte",
                                    "Id": "10412",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Steuertexte (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Steuertexte (Soloplan-Vorgabe)",
                                        "Id": "42a2c874-6603-4bd3-afa3-455379daa244",
                                        "Type": "Layout",
                                        "HintText": "Steuertexte (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Steuertexte",
                                            "OriginalCaption": "Steuertexte",
                                            "Id": "42a2c874-6603-4bd3-afa3-455379daa244_LayoutControlGroup_5028200",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                            {
                                                "Caption": "Benutzerdefinierte Felder",
                                                "OriginalCaption": "Benutzerdefinierte Felder",
                                                "Id": "42a2c874-6603-4bd3-afa3-455379daa244_LayoutControlGroup_5028200_700000",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }
                                        ]
                                    }]
                                }
                            ]
                        },
                            {
                                "Caption": "Finanzbuchhaltung",
                                "OriginalCaption": "Finanzbuchhaltung",
                                "Id": "10430",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Gegenkontenrelationen",
                                    "OriginalCaption": "Gegenkontenrelationen",
                                    "Id": "10432",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Gegenkontenrelationen (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Gegenkontenrelationen (Soloplan-Vorgabe)",
                                        "Id": "13f57e4c-e6b1-438e-a7f2-9aad00ffdb94",
                                        "Type": "Layout",
                                        "HintText": "Gegenkontenrelationen (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Gegenkontenrelationen",
                                            "OriginalCaption": "Gegenkontenrelationen",
                                            "Id": "13f57e4c-e6b1-438e-a7f2-9aad00ffdb94_LayoutControlGroup_5032200",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                            {
                                                "Caption": "Bedingungen",
                                                "OriginalCaption": "Bedingungen",
                                                "Id": "13f57e4c-e6b1-438e-a7f2-9aad00ffdb94_LayoutControlGroup_5032200_{911D989C-E9D2-4518-9EED-EDE8CC2F65B4}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Benutzerdefinierte Felder",
                                                "OriginalCaption": "Benutzerdefinierte Felder",
                                                "Id": "13f57e4c-e6b1-438e-a7f2-9aad00ffdb94_LayoutControlGroup_5032200_700000",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }
                                        ]
                                    }]
                                },
                                    {
                                        "Caption": "Buchungsperioden",
                                        "OriginalCaption": "Buchungsperioden",
                                        "Id": "10022",
                                        "Type": "Dialog",
                                        "HintText": "Buchungsperioden",
                                        "Level": 3,
                                        "Children": [{
                                            "Caption": "Buchungsperiode (Soloplan-Vorgabe)",
                                            "OriginalCaption": "Buchungsperiode (Soloplan-Vorgabe)",
                                            "Id": "7b6aa1a3-5198-45aa-9ed5-91678519af2d",
                                            "Type": "Layout",
                                            "HintText": "Buchungsperiode (Soloplan-Vorgabe)",
                                            "Level": 4,
                                            "Children": [{
                                                "Caption": "Buchungsperiode",
                                                "OriginalCaption": "Buchungsperiode",
                                                "Id": "7b6aa1a3-5198-45aa-9ed5-91678519af2d_LayoutControlGroup_5019100",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }]
                                        }]
                                    },
                                    {
                                        "Caption": "Gegenkontengruppen",
                                        "OriginalCaption": "Gegenkontengruppen",
                                        "Id": "10431",
                                        "Type": "Dialog",
                                        "HintText": "",
                                        "Level": 3,
                                        "Children": [{
                                            "Caption": "GegenkontenGruppen (Soloplan-Vorgabe)",
                                            "OriginalCaption": "GegenkontenGruppen (Soloplan-Vorgabe)",
                                            "Id": "b8d3bec0-f13c-482c-b861-8e386dcfbb5a",
                                            "Type": "Layout",
                                            "HintText": "GegenkontenGruppen (Soloplan-Vorgabe)",
                                            "Level": 4,
                                            "Children": [{
                                                "Caption": "Gegenkontengruppen",
                                                "OriginalCaption": "Gegenkontengruppen",
                                                "Id": "b8d3bec0-f13c-482c-b861-8e386dcfbb5a_LayoutControlGroup_5011800",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                                {
                                                    "Caption": "Benutzerdefinierte Felder",
                                                    "OriginalCaption": "Benutzerdefinierte Felder",
                                                    "Id": "b8d3bec0-f13c-482c-b861-8e386dcfbb5a_LayoutControlGroup_5011800_700000",
                                                    "Type": "TabSheet",
                                                    "HintText": "",
                                                    "Level": 5,
                                                    "Children": null
                                                }
                                            ]
                                        }]
                                    },
                                    {
                                        "Caption": "Weiterberechnungsregeln",
                                        "OriginalCaption": "Weiterberechnungsregeln",
                                        "Id": "10434",
                                        "Type": "Dialog",
                                        "HintText": "",
                                        "Level": 3,
                                        "Children": [{
                                            "Caption": "Weiterberechnungsregeln (Soloplan-Vorgabe)",
                                            "OriginalCaption": "Weiterberechnungsregeln (Soloplan-Vorgabe)",
                                            "Id": "0eca7c1f-1ecd-4d89-a142-deb724fa1814",
                                            "Type": "Layout",
                                            "HintText": "Weiterberechnungsregeln (Soloplan-Vorgabe)",
                                            "Level": 4,
                                            "Children": [{
                                                "Caption": "Weiterberechnungsregel",
                                                "OriginalCaption": "Weiterberechnungsregel",
                                                "Id": "0eca7c1f-1ecd-4d89-a142-deb724fa1814_LayoutControlGroup_5060300",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                                {
                                                    "Caption": "Gültigkeiten/Kriterien",
                                                    "OriginalCaption": "Gültigkeiten/Kriterien",
                                                    "Id": "0eca7c1f-1ecd-4d89-a142-deb724fa1814_LayoutControlGroup_5060300_5060309",
                                                    "Type": "TabSheet",
                                                    "HintText": "",
                                                    "Level": 5,
                                                    "Children": null
                                                }
                                            ]
                                        }]
                                    }
                                ]
                            },
                            {
                                "Caption": "Nummernkreise",
                                "OriginalCaption": "Nummernkreise",
                                "Id": "10440",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Nummernkreisrelationen",
                                    "OriginalCaption": "Nummernkreisrelationen",
                                    "Id": "10445",
                                    "Type": "Dialog",
                                    "HintText": "Nummernkreisrelationen",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Nummernkreisrelation (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Nummernkreisrelation (Soloplan-Vorgabe)",
                                        "Id": "32d76c12-b82e-4cfc-82a1-99ffa9953a91",
                                        "Type": "Layout",
                                        "HintText": "Nummernkreisrelation (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Nummernkreisrelation",
                                            "OriginalCaption": "Nummernkreisrelation",
                                            "Id": "32d76c12-b82e-4cfc-82a1-99ffa9953a91_LayoutControlGroup_5018100",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                    {
                                        "Caption": "Interne Nummernkreise",
                                        "OriginalCaption": "Interne Nummernkreise",
                                        "Id": "10441",
                                        "Type": "Dialog",
                                        "HintText": "",
                                        "Level": 3,
                                        "Children": [{
                                            "Caption": "Interne Nummernkreise (Soloplan-Vorgabe)",
                                            "OriginalCaption": "Interne Nummernkreise (Soloplan-Vorgabe)",
                                            "Id": "27e829e0-1272-4522-a0c9-694e1ab01720",
                                            "Type": "Layout",
                                            "HintText": "Interne Nummernkreise (Soloplan-Vorgabe)",
                                            "Level": 4,
                                            "Children": [{
                                                "Caption": "Interne Nummernkreise",
                                                "OriginalCaption": "Interne Nummernkreise",
                                                "Id": "27e829e0-1272-4522-a0c9-694e1ab01720_LayoutControlGroup_5017800",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }]
                                        }]
                                    },
                                    {
                                        "Caption": "Freie Nummernkreise",
                                        "OriginalCaption": "Freie Nummernkreise",
                                        "Id": "10442",
                                        "Type": "Dialog",
                                        "HintText": "",
                                        "Level": 3,
                                        "Children": [{
                                            "Caption": "Freie Nummernkreise (Soloplan-Vorgabe)",
                                            "OriginalCaption": "Freie Nummernkreise (Soloplan-Vorgabe)",
                                            "Id": "305ce23b-919b-459b-8b7a-d5307a1ede17",
                                            "Type": "Layout",
                                            "HintText": "Freie Nummernkreise (Soloplan-Vorgabe)",
                                            "Level": 4,
                                            "Children": [{
                                                "Caption": "Freie Nummernkreise",
                                                "OriginalCaption": "Freie Nummernkreise",
                                                "Id": "305ce23b-919b-459b-8b7a-d5307a1ede17_LayoutControlGroup_5017700",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }]
                                        }]
                                    }
                                ]
                            },
                            {
                                "Caption": "Wartung",
                                "OriginalCaption": "Wartung",
                                "Id": "10406",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Aktualisierung der Mautdateien",
                                    "OriginalCaption": "Aktualisierung der Mautdateien",
                                    "Id": "10446",
                                    "Type": "Dialog",
                                    "HintText": "Aktualisierung der Mautdateien",
                                    "Level": 3,
                                    "Children": null
                                }]
                            },
                            {
                                "Caption": "Geschäftsobjekte",
                                "OriginalCaption": "Geschäftsobjekte",
                                "Id": "10804",
                                "Type": "Dialog",
                                "HintText": "Dialog um Eigenschaften eines Geschäftsobjekts festzulegen. Z. B. welche Restriktionen oder benutzerdefinierte Prüfungen auf einem Geschäftsobjekt angewendet werden.",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Benutzerdefinierte Felder",
                                "OriginalCaption": "Benutzerdefinierte Felder",
                                "Id": "10809",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Benutzerdefinierte Felder (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Benutzerdefinierte Felder (Soloplan-Vorgabe)",
                                    "Id": "8d8251eb-fff7-4871-84fe-507dfecb6623",
                                    "Type": "Layout",
                                    "HintText": "Benutzerdefinierte Felder (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "8d8251eb-fff7-4871-84fe-507dfecb6623_LayoutControlGroup_5047500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Benutzerdefinierte PlugIns",
                                "OriginalCaption": "Benutzerdefinierte PlugIns",
                                "Id": "10802",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "BenutzerPlugIns (Soloplan-Vorgabe)",
                                    "OriginalCaption": "BenutzerPlugIns (Soloplan-Vorgabe)",
                                    "Id": "a64be8ba-c384-43e3-ac7d-075420011420",
                                    "Type": "Layout",
                                    "HintText": "BenutzerPlugIns (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Benutzerdefinierte PlugIns",
                                        "OriginalCaption": "Benutzerdefinierte PlugIns",
                                        "Id": "a64be8ba-c384-43e3-ac7d-075420011420_LayoutControlGroup_5035600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Speziell",
                                            "OriginalCaption": "Speziell",
                                            "Id": "a64be8ba-c384-43e3-ac7d-075420011420_LayoutControlGroup_5035600_{F139C9B9-305E-408f-AE4E-7A50BB6CCF3A}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Benutzerdefinierte Spalten",
                                "OriginalCaption": "Benutzerdefinierte Spalten",
                                "Id": "10810",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "CustomFieldDefinition (Soloplan-Vorgabe)",
                                    "OriginalCaption": "CustomFieldDefinition (Soloplan-Vorgabe)",
                                    "Id": "81478dc8-9e08-4832-9d9b-a63aa9bb053b",
                                    "Type": "Layout",
                                    "HintText": "CustomFieldDefinition (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Benutzerdefinierte Spalten",
                                        "OriginalCaption": "Benutzerdefinierte Spalten",
                                        "Id": "81478dc8-9e08-4832-9d9b-a63aa9bb053b_LayoutControlGroup_5054700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "SQL-Restriktionen",
                                "OriginalCaption": "SQL-Restriktionen",
                                "Id": "10817",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "SQL Restriktionen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "SQL Restriktionen (Soloplan-Vorgabe)",
                                    "Id": "943d9747-92ab-4037-a87b-0016be8e9c36",
                                    "Type": "Layout",
                                    "HintText": "SQL Restriktionen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "SQL-Restriktionen",
                                        "OriginalCaption": "SQL-Restriktionen",
                                        "Id": "943d9747-92ab-4037-a87b-0016be8e9c36_LayoutControlGroup_5066100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Ablagekonfigurationen",
                                "OriginalCaption": "Ablagekonfigurationen",
                                "Id": "10818",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Ablagekonfiguration (Soloplan Vorgabe)",
                                    "OriginalCaption": "Ablagekonfiguration (Soloplan Vorgabe)",
                                    "Id": "9b793dc7-2dc0-4ef7-a093-951830c27e0e",
                                    "Type": "Layout",
                                    "HintText": "Ablagekonfiguration (Soloplan Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Ablagekonfigurationen",
                                        "OriginalCaption": "Ablagekonfigurationen",
                                        "Id": "9b793dc7-2dc0-4ef7-a093-951830c27e0e_LayoutControlGroup_5071300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Barcodekonfiguration",
                                "OriginalCaption": "Barcodekonfiguration",
                                "Id": "10822",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Barcodekonfiguration (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Barcodekonfiguration (Soloplan-Vorgabe)",
                                    "Id": "180097e2-f74a-46c8-97d7-bb52683c340b",
                                    "Type": "Layout",
                                    "HintText": "Barcodekonfiguration (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Barcodekonfiguration",
                                        "OriginalCaption": "Barcodekonfiguration",
                                        "Id": "180097e2-f74a-46c8-97d7-bb52683c340b_LayoutControlGroup_5040200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Dokumentenkategorien",
                                "OriginalCaption": "Dokumentenkategorien",
                                "Id": "10826",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Dokumentenkategorie (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Dokumentenkategorie (Soloplan-Vorgabe)",
                                    "Id": "3b2a1a84-170e-4c15-b28f-b3da2f66064f",
                                    "Type": "Layout",
                                    "HintText": "Dokumentenkategorie (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Dokumentenkategorie",
                                        "OriginalCaption": "Dokumentenkategorie",
                                        "Id": "3b2a1a84-170e-4c15-b28f-b3da2f66064f_LayoutControlGroup_5730800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Bearbeitungshistorie",
                                            "OriginalCaption": "Bearbeitungshistorie",
                                            "Id": "3b2a1a84-170e-4c15-b28f-b3da2f66064f_LayoutControlGroup_5730800_5730809",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Embargo",
                                "OriginalCaption": "Embargo",
                                "Id": "10824",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Embargo (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Embargo (Soloplan-Vorgabe)",
                                    "Id": "ae6e455c-7cab-4971-b739-8b4b78f2d4c1",
                                    "Type": "Layout",
                                    "HintText": "Embargo (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Embargo",
                                        "OriginalCaption": "Embargo",
                                        "Id": "ae6e455c-7cab-4971-b739-8b4b78f2d4c1_LayoutControlGroup_5730200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Statusmanagement",
                        "OriginalCaption": "Statusmanagement",
                        "Id": "10825",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Workflow-Status",
                            "OriginalCaption": "Workflow-Status",
                            "Id": "10806",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Status (Soloplan-Vorgabe)",
                                "OriginalCaption": "Status (Soloplan-Vorgabe)",
                                "Id": "bc499b2b-2dba-406d-94f3-e07c5c5748cf",
                                "Type": "Layout",
                                "HintText": "Status (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Workflow-Status",
                                    "OriginalCaption": "Workflow-Status",
                                    "Id": "bc499b2b-2dba-406d-94f3-e07c5c5748cf_LayoutControlGroup_5037100",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Statuskategorien",
                                "OriginalCaption": "Statuskategorien",
                                "Id": "10807",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Statuskategorie (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Statuskategorie (Soloplan-Vorgabe)",
                                    "Id": "ab543519-1613-4ee1-a123-f4e5d1b07f74",
                                    "Type": "Layout",
                                    "HintText": "Statuskategorie (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Status",
                                        "OriginalCaption": "Status",
                                        "Id": "ab543519-1613-4ee1-a123-f4e5d1b07f74_LayoutControlGroup_5037000_5037011",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Statusübergänge",
                                "OriginalCaption": "Statusübergänge",
                                "Id": "10808",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Status-Übergang (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Status-Übergang (Soloplan-Vorgabe)",
                                    "Id": "5e275b13-cd65-47b9-816b-d1d224d6adcb",
                                    "Type": "Layout",
                                    "HintText": "Status-Übergang (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Statusübergänge",
                                        "OriginalCaption": "Statusübergänge",
                                        "Id": "5e275b13-cd65-47b9-816b-d1d224d6adcb_LayoutControlGroup_5037200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Workflow",
                        "OriginalCaption": "Workflow",
                        "Id": "10805",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Workflows",
                            "OriginalCaption": "Workflows",
                            "Id": "10823",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Workflows (Soloplan-Vorgabe)",
                                "OriginalCaption": "Workflows (Soloplan-Vorgabe)",
                                "Id": "98b77507-757f-40a2-b8e4-c2780575cc24",
                                "Type": "Layout",
                                "HintText": "Workflows (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Aktionen",
                                    "OriginalCaption": "Aktionen",
                                    "Id": "98b77507-757f-40a2-b8e4-c2780575cc24_LayoutControlGroup_5729100_5729104",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        }]
                    },
                    {
                        "Caption": "Schnittstellen",
                        "OriginalCaption": "Schnittstellen",
                        "Id": "10500",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "SAP",
                            "OriginalCaption": "SAP",
                            "Id": "10510",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Datenumsetzung",
                                "OriginalCaption": "Datenumsetzung",
                                "Id": "10520",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        },
                            {
                                "Caption": "Status",
                                "OriginalCaption": "Status",
                                "Id": "10540",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "NVE-Status",
                                    "OriginalCaption": "NVE-Status",
                                    "Id": "10546",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "NVE-Status (Soloplan-Vorgabe)",
                                        "OriginalCaption": "NVE-Status (Soloplan-Vorgabe)",
                                        "Id": "8ea799b2-2b53-4fa6-a723-01fe18298276",
                                        "Type": "Layout",
                                        "HintText": "NVE-Status (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "NVE-Status",
                                            "OriginalCaption": "NVE-Status",
                                            "Id": "8ea799b2-2b53-4fa6-a723-01fe18298276_LayoutControlGroup_5003700",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                }]
                            },
                            {
                                "Caption": "Telematik",
                                "OriginalCaption": "Telematik",
                                "Id": "10550",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "inTOUCH-Konfigurationen",
                                    "OriginalCaption": "inTOUCH-Konfigurationen",
                                    "Id": "10553",
                                    "Type": "Dialog",
                                    "HintText": "inTOUCH-Konfiguration",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "InTouchConfiguration (Soloplan-Vorgabe)",
                                        "OriginalCaption": "InTouchConfiguration (Soloplan-Vorgabe)",
                                        "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436",
                                        "Type": "Layout",
                                        "HintText": "InTouchConfiguration (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Allgemein/Anmeldung",
                                            "OriginalCaption": "Allgemein/Anmeldung",
                                            "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{0FCCB6A9-DC85-4B38-8A9F-9FC0A6B5F106}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                            {
                                                "Caption": "Stationsliste",
                                                "OriginalCaption": "Stationsliste",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{43B34C15-D45C-4E7A-8E85-F61E1B870521}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Berechtigungen",
                                                "OriginalCaption": "Berechtigungen",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{6DB4FA98-B786-441A-B2ED-3ECAD7F527D3}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Rückgabewerte",
                                                "OriginalCaption": "Rückgabewerte",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{BD00D6C9-9FF4-4700-B5DD-4F58E65F9164}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Stationsdetails",
                                                "OriginalCaption": "Stationsdetails",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{128A612E-BF6D-4EE3-A248-0BD2879F8F6C}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Positionen",
                                                "OriginalCaption": "Positionen",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{A69E932F-12CA-4C09-B1C2-0CB033B4A58D}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Nachrichten",
                                                "OriginalCaption": "Nachrichten",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{C0775DAC-9681-4E93-B556-B93BB8630671}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Problem-Meldungen",
                                                "OriginalCaption": "Problem-Meldungen",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{B1A37F00-7D62-4D98-93F3-55C6620385B8}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Checklisten",
                                                "OriginalCaption": "Checklisten",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{5A356C49-4809-4F14-8CAF-69C0FC9F6EE7}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "NVE-Verwaltung",
                                                "OriginalCaption": "NVE-Verwaltung",
                                                "Id": "8cca4ca3-23a5-48cd-9b7c-d3f10bb2f436_LayoutControlGroup_5006000_{F581F6A3-0552-498E-95C5-56E56B2D5D18}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }
                                        ]
                                    }]
                                },
                                    {
                                        "Caption": "inTOUCH-Checklisten",
                                        "OriginalCaption": "inTOUCH-Checklisten",
                                        "Id": "10556",
                                        "Type": "Dialog",
                                        "HintText": "",
                                        "Level": 3,
                                        "Children": [{
                                            "Caption": "inTOUCH checklist configuration",
                                            "OriginalCaption": "inTOUCH checklist configuration",
                                            "Id": "9e8df2ca-0291-4543-afaf-c535fa10b297",
                                            "Type": "Layout",
                                            "HintText": "inTOUCH checklist configuration",
                                            "Level": 4,
                                            "Children": [{
                                                "Caption": "inTOUCH Checklisten",
                                                "OriginalCaption": "inTOUCH Checklisten",
                                                "Id": "9e8df2ca-0291-4543-afaf-c535fa10b297_LayoutControlGroup_5719100",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                                {
                                                    "Caption": "Felder",
                                                    "OriginalCaption": "Felder",
                                                    "Id": "9e8df2ca-0291-4543-afaf-c535fa10b297_LayoutControlGroup_5719100_{DA30DEB7-29F3-464D-96D0-7FDDFF27957D}",
                                                    "Type": "TabSheet",
                                                    "HintText": "",
                                                    "Level": 5,
                                                    "Children": null
                                                }
                                            ]
                                        }]
                                    }
                                ]
                            },
                            {
                                "Caption": "inSCAN-Konfigurationen",
                                "OriginalCaption": "inSCAN-Konfigurationen",
                                "Id": "10505",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "InScanConfiguration (Soloplan-Vorgabe)",
                                    "OriginalCaption": "InScanConfiguration (Soloplan-Vorgabe)",
                                    "Id": "0c7201cb-fa54-46f5-a1fb-37184ef5739d",
                                    "Type": "Layout",
                                    "HintText": "InScanConfiguration (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "inSCAN-Konfigurationen",
                                        "OriginalCaption": "inSCAN-Konfigurationen",
                                        "Id": "0c7201cb-fa54-46f5-a1fb-37184ef5739d_LayoutControlGroup_5064400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Zuordnung",
                                            "OriginalCaption": "Zuordnung",
                                            "Id": "0c7201cb-fa54-46f5-a1fb-37184ef5739d_LayoutControlGroup_5064400_{D02927C0-4A76-42CC-9071-646ADB36850B}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Informationen anzeigen",
                                            "OriginalCaption": "Informationen anzeigen",
                                            "Id": "0c7201cb-fa54-46f5-a1fb-37184ef5739d_LayoutControlGroup_5064400_{FBDB9CF2-73AA-4813-8599-2E3DD495645E}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Druckeinstellungen",
                                            "OriginalCaption": "Druckeinstellungen",
                                            "Id": "0c7201cb-fa54-46f5-a1fb-37184ef5739d_LayoutControlGroup_5064400_{3265AA76-527B-4DC9-A35C-DA9BFA8887FD}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Einstellungen",
                                            "OriginalCaption": "Einstellungen",
                                            "Id": "0c7201cb-fa54-46f5-a1fb-37184ef5739d_LayoutControlGroup_5064400_{1F9CD822-163C-422B-8632-71898DE83CA2}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Externe Systeme",
                                "OriginalCaption": "Externe Systeme",
                                "Id": "10506",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "ExternalSystem (Soloplan-Vorgabe)",
                                    "OriginalCaption": "ExternalSystem (Soloplan-Vorgabe)",
                                    "Id": "07ca15cf-a326-48e9-a22b-4408b3e77a71",
                                    "Type": "Layout",
                                    "HintText": "ExternalSystem (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Externe Systeme",
                                        "OriginalCaption": "Externe Systeme",
                                        "Id": "07ca15cf-a326-48e9-a22b-4408b3e77a71_LayoutControlGroup_5066900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Externe Systeme (Mapping)",
                                "OriginalCaption": "Externe Systeme (Mapping)",
                                "Id": "10820",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Externe Systeme (Mapping) (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Externe Systeme (Mapping) (Soloplan-Vorgabe)",
                                    "Id": "2cb09b3b-fc8e-4783-bf8f-fe0d180f25ad",
                                    "Type": "Layout",
                                    "HintText": "Externe Systeme (Mapping) (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Externe Systeme Mapping",
                                        "OriginalCaption": "Externe Systeme Mapping",
                                        "Id": "2cb09b3b-fc8e-4783-bf8f-fe0d180f25ad_LayoutControlGroup_5710000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Bearbeitungshistorie",
                                            "OriginalCaption": "Bearbeitungshistorie",
                                            "Id": "2cb09b3b-fc8e-4783-bf8f-fe0d180f25ad_LayoutControlGroup_5710000_5710009",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Mapping-Einträge",
                                            "OriginalCaption": "Mapping-Einträge",
                                            "Id": "2cb09b3b-fc8e-4783-bf8f-fe0d180f25ad_LayoutControlGroup_5710000_5710010",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "GP-Überprüfung",
                                "OriginalCaption": "GP-Überprüfung",
                                "Id": "10507",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Screening (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Screening (Soloplan-Vorgabe)",
                                    "Id": "1565aef4-baa6-42a8-a6b0-9eb35409cc9e",
                                    "Type": "Layout",
                                    "HintText": "Screening (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "GP-Überprüfung",
                                        "OriginalCaption": "GP-Überprüfung",
                                        "Id": "1565aef4-baa6-42a8-a6b0-9eb35409cc9e_LayoutControlGroup_5729300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Web-API Konfiguration",
                                "OriginalCaption": "Web-API Konfiguration",
                                "Id": "10828",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            }
                        ]
                    }
                ]
            },
            {
                "Caption": "Stammdaten",
                "OriginalCaption": "Stammdaten",
                "Id": "60000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Partner",
                    "OriginalCaption": "Partner",
                    "Id": "60900",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Geschäftspartner",
                        "OriginalCaption": "Geschäftspartner",
                        "Id": "60901",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 2,
                        "Children": [{
                            "Caption": "Geschäftspartner (Soloplan-Vorgabe)",
                            "OriginalCaption": "Geschäftspartner (Soloplan-Vorgabe)",
                            "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28",
                            "Type": "Layout",
                            "HintText": "Geschäftspartner (Soloplan-Vorgabe)",
                            "Level": 3,
                            "Children": [{
                                "Caption": "Geschäftspartner",
                                "OriginalCaption": "Geschäftspartner",
                                "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 4,
                                "Children": null
                            },
                                {
                                    "Caption": "Gruppen",
                                    "OriginalCaption": "Gruppen",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_20056",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Typ",
                                    "OriginalCaption": "Typ",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{1FE71B29-14C4-4be1-9198-BE85156657E8}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Ansprechpartner",
                                    "OriginalCaption": "Ansprechpartner",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_20052",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Abrechnung",
                                    "OriginalCaption": "Abrechnung",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{124BABC3-A910-4e0c-888A-AF1CBABF8ED3}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Faktura",
                                    "OriginalCaption": "Faktura",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{C7312968-E24F-4fde-B4BB-30B3137C6BA2}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Fibu",
                                    "OriginalCaption": "Fibu",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{60BD70BD-5206-4018-8BF4-6F6181CEA179}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Zahlungsverkehr",
                                    "OriginalCaption": "Zahlungsverkehr",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{A33D0CE6-9EC2-40b4-BBD4-5EB507C85B50}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "OP-Verwaltung",
                                    "OriginalCaption": "OP-Verwaltung",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{00379863-DBA3-4e04-AD98-704D6BEA9285}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Ausgabe",
                                    "OriginalCaption": "Ausgabe",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{F61A6FAA-68A0-4e24-A5D1-FC2294045F40}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Infofelder/ Nachschlagefelder",
                                    "OriginalCaption": "Infofelder/ Nachschlagefelder",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{E0786245-5BAB-48cc-BB31-93D56EE1E65B}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Restriktionen",
                                    "OriginalCaption": "Restriktionen",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{8AB97862-F4CA-49b0-A9FB-3A5A842C4472}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Ladeavis/-stellen",
                                    "OriginalCaption": "Ladeavis/-stellen",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{556D3B0F-4FAE-46a5-BE4D-29877D4F1D80}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Berichte",
                                    "OriginalCaption": "Berichte",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{C13A6D61-DFB6-4105-B90C-8BBF846F428A}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Entfernungswerke",
                                    "OriginalCaption": "Entfernungswerke",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{90B46AD9-E762-4af7-B219-924DF28AC6D7}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Artikel",
                                    "OriginalCaption": "Artikel",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_20275",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Ausstattungen",
                                    "OriginalCaption": "Ausstattungen",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_20281",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Schnittstellen",
                                    "OriginalCaption": "Schnittstellen",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{6C315326-4A96-4ab9-AB56-821CD15AB885}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Genehmigungen",
                                    "OriginalCaption": "Genehmigungen",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{6928CCCD-955C-491F-9943-4D4AC4C48DFB}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Benutzerdefinierte Felder",
                                    "OriginalCaption": "Benutzerdefinierte Felder",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_700000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "ID-Karten",
                                    "OriginalCaption": "ID-Karten",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{4329D378-1EDD-418B-BD72-7D2A273C8A0A}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Cockpit",
                                    "OriginalCaption": "Cockpit",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_{AEF82108-A947-45E6-B673-0B362D38CAB7}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                {
                                    "Caption": "Überprüfungshistorie",
                                    "OriginalCaption": "Überprüfungshistorie",
                                    "Id": "79b5b69c-d99e-4c0f-aba6-d6013e49da28_LayoutControlGroup_20000_20366",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }
                            ]
                        }]
                    },
                        {
                            "Caption": "Geschäftspartnergruppen",
                            "OriginalCaption": "Geschäftspartnergruppen",
                            "Id": "60902",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Geschäftspartnergruppen (Soloplan-Vorgabe)",
                                "OriginalCaption": "Geschäftspartnergruppen (Soloplan-Vorgabe)",
                                "Id": "cee0586e-09d1-493b-8f24-b216467c6ab6",
                                "Type": "Layout",
                                "HintText": "Geschäftspartnergruppen (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Geschäftspartnergruppen",
                                    "OriginalCaption": "Geschäftspartnergruppen",
                                    "Id": "cee0586e-09d1-493b-8f24-b216467c6ab6_LayoutControlGroup_105000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Fibu/OP",
                                        "OriginalCaption": "Fibu/OP",
                                        "Id": "cee0586e-09d1-493b-8f24-b216467c6ab6_LayoutControlGroup_105000_{D2D0DB54-5D7F-40ba-8660-2DED2CB0F775}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "cee0586e-09d1-493b-8f24-b216467c6ab6_LayoutControlGroup_105000_700000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                        {
                            "Caption": "Branchen",
                            "OriginalCaption": "Branchen",
                            "Id": "60904",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Branchen (Soloplan-Vorgabe)",
                                "OriginalCaption": "Branchen (Soloplan-Vorgabe)",
                                "Id": "07cfdb9b-5433-45fb-919b-526ece26c426",
                                "Type": "Layout",
                                "HintText": "Branchen (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Branchen",
                                    "OriginalCaption": "Branchen",
                                    "Id": "07cfdb9b-5433-45fb-919b-526ece26c426_LayoutControlGroup_5000000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                        {
                            "Caption": "Zuständigkeiten",
                            "OriginalCaption": "Zuständigkeiten",
                            "Id": "62013",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Zuständigkeiten (Soloplan-Vorgabe)",
                                "OriginalCaption": "Zuständigkeiten (Soloplan-Vorgabe)",
                                "Id": "6a62989f-14ce-48cb-977f-78d517247e4a",
                                "Type": "Layout",
                                "HintText": "Zuständigkeiten (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Zuständigkeiten",
                                    "OriginalCaption": "Zuständigkeiten",
                                    "Id": "6a62989f-14ce-48cb-977f-78d517247e4a_LayoutControlGroup_5036400",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Ansprechpartner",
                                        "OriginalCaption": "Ansprechpartner",
                                        "Id": "6a62989f-14ce-48cb-977f-78d517247e4a_LayoutControlGroup_5036400_{F510BA1B-A9EF-4BB3-82F4-145DC90DF617}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        }
                    ]
                },
                    {
                        "Caption": "Fuhrpark",
                        "OriginalCaption": "Fuhrpark",
                        "Id": "60200",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Eigenschaften",
                            "OriginalCaption": "Eigenschaften",
                            "Id": "60215",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Reifentypen",
                                "OriginalCaption": "Reifentypen",
                                "Id": "90438",
                                "Type": "Dialog",
                                "HintText": "Reifentypen",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Reifentypen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Reifentypen (Soloplan-Vorgabe)",
                                    "Id": "3e8b5fcf-f13c-457d-968b-edfe75698e1e",
                                    "Type": "Layout",
                                    "HintText": "Reifentypen (Soloplan-Vorgabe)",
                                    "Level": 4,
                                    "Children": [{
                                        "Caption": "Reifentypen",
                                        "OriginalCaption": "Reifentypen",
                                        "Id": "3e8b5fcf-f13c-457d-968b-edfe75698e1e_LayoutControlGroup_5000800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 5,
                                        "Children": null
                                    }]
                                }]
                            },
                                {
                                    "Caption": "Kammerdefinitionen",
                                    "OriginalCaption": "Kammerdefinitionen",
                                    "Id": "60208",
                                    "Type": "Dialog",
                                    "HintText": "Kammerdefinitionen",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeugkammerdefinition (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeugkammerdefinition (Soloplan-Vorgabe)",
                                        "Id": "e3a9529a-cd73-42ff-b554-0cfb43386b07",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeugkammerdefinition (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Kammerdefinitionen",
                                            "OriginalCaption": "Kammerdefinitionen",
                                            "Id": "e3a9529a-cd73-42ff-b554-0cfb43386b07_LayoutControlGroup_5010300",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Fahrzeugprofile",
                                    "OriginalCaption": "Fahrzeugprofile",
                                    "Id": "60206",
                                    "Type": "Dialog",
                                    "HintText": "Fahrzeugprofile",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeugprofile (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeugprofile (Soloplan-Vorgabe)",
                                        "Id": "789ff79c-8330-42b8-a5f2-525b22532093",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeugprofile (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Fahrzeugprofile",
                                            "OriginalCaption": "Fahrzeugprofile",
                                            "Id": "789ff79c-8330-42b8-a5f2-525b22532093_LayoutControlGroup_5010400_{33998A26-3518-4261-B3FA-2785EEE291B9}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                            {
                                                "Caption": "Entfernungsermittlung",
                                                "OriginalCaption": "Entfernungsermittlung",
                                                "Id": "789ff79c-8330-42b8-a5f2-525b22532093_LayoutControlGroup_5010400_{919D5DE1-EF81-4c2b-A1A2-E0C929353BF3}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Technische Daten",
                                                "OriginalCaption": "Technische Daten",
                                                "Id": "789ff79c-8330-42b8-a5f2-525b22532093_LayoutControlGroup_5010400_{4C3A6DF7-7126-4932-8629-D7E4602FCAAA}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }
                                        ]
                                    }]
                                },
                                {
                                    "Caption": "Hersteller",
                                    "OriginalCaption": "Hersteller",
                                    "Id": "60211",
                                    "Type": "Dialog",
                                    "HintText": "Hersteller",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeughersteller (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeughersteller (Soloplan-Vorgabe)",
                                        "Id": "b64f6306-db36-4d94-941c-9a5cb2f21cd7",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeughersteller (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Fahrzeughersteller",
                                            "OriginalCaption": "Fahrzeughersteller",
                                            "Id": "b64f6306-db36-4d94-941c-9a5cb2f21cd7_LayoutControlGroup_5012000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Versicherungsarten",
                                    "OriginalCaption": "Versicherungsarten",
                                    "Id": "90436",
                                    "Type": "Dialog",
                                    "HintText": "Versicherungsarten",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Versicherungsarten (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Versicherungsarten (Soloplan-Vorgabe)",
                                        "Id": "233005e0-8249-46c3-90b5-460f7450daaf",
                                        "Type": "Layout",
                                        "HintText": "Versicherungsarten (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Versicherungsarten",
                                            "OriginalCaption": "Versicherungsarten",
                                            "Id": "233005e0-8249-46c3-90b5-460f7450daaf_LayoutControlGroup_5015600",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Fahrzeugkostensätze",
                                    "OriginalCaption": "Fahrzeugkostensätze",
                                    "Id": "60216",
                                    "Type": "Dialog",
                                    "HintText": "Fahrzeugkostensätze",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeugkostensätze (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeugkostensätze (Soloplan-Vorgabe)",
                                        "Id": "8eca365e-40ea-4211-8152-231cfe03e419",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeugkostensätze (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Fahrzeugkostensätze",
                                            "OriginalCaption": "Fahrzeugkostensätze",
                                            "Id": "8eca365e-40ea-4211-8152-231cfe03e419_LayoutControlGroup_5009900",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Fahrzeugtypen",
                                    "OriginalCaption": "Fahrzeugtypen",
                                    "Id": "60202",
                                    "Type": "Dialog",
                                    "HintText": "Fahrzeugtypen",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeugtypen (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeugtypen (Soloplan-Vorgabe)",
                                        "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeugtypen (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Fahrzeugtypen",
                                            "OriginalCaption": "Fahrzeugtypen",
                                            "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97_LayoutControlGroup_5010000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                            {
                                                "Caption": "Fahrzeuge",
                                                "OriginalCaption": "Fahrzeuge",
                                                "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97_LayoutControlGroup_5010000_{23B1BE4F-A827-4e0d-8CF9-0C6205084E96}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Fahrzeugtypzuordnungen",
                                                "OriginalCaption": "Fahrzeugtypzuordnungen",
                                                "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97_LayoutControlGroup_5010000_{EF5E2A0D-8ADA-4FB8-8BAF-B644A5D21B54}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Artikelgruppen",
                                                "OriginalCaption": "Artikelgruppen",
                                                "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97_LayoutControlGroup_5010000_{2DAA6600-767A-4A84-8232-437B6D8F329F}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Fahrzeugtypkombinationen",
                                                "OriginalCaption": "Fahrzeugtypkombinationen",
                                                "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97_LayoutControlGroup_5010000_{F61C9501-4F23-4279-81CB-3C8867312437}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Externe Referenzen",
                                                "OriginalCaption": "Externe Referenzen",
                                                "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97_LayoutControlGroup_5010000_{FC8E465B-CE52-4545-8BE9-48D6D0232C93}",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            },
                                            {
                                                "Caption": "Benutzerdefinierte Felder",
                                                "OriginalCaption": "Benutzerdefinierte Felder",
                                                "Id": "51ca6c90-3d5d-4ee2-9826-8023caee8b97_LayoutControlGroup_5010000_700000",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }
                                        ]
                                    }]
                                },
                                {
                                    "Caption": "Typen/Ausführungen",
                                    "OriginalCaption": "Typen/Ausführungen",
                                    "Id": "60210",
                                    "Type": "Dialog",
                                    "HintText": "Fahrzeugausführungen",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeugausführungen (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeugausführungen (Soloplan-Vorgabe)",
                                        "Id": "492e8046-a2bf-4c24-b8ca-c60fe91b241c",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeugausführungen (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Typen/Ausführungen",
                                            "OriginalCaption": "Typen/Ausführungen",
                                            "Id": "492e8046-a2bf-4c24-b8ca-c60fe91b241c_LayoutControlGroup_5011900",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Schadenstypen",
                                    "OriginalCaption": "Schadenstypen",
                                    "Id": "90732",
                                    "Type": "Dialog",
                                    "HintText": "Schadenstypen",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Schadenstypen (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Schadenstypen (Soloplan-Vorgabe)",
                                        "Id": "f9b1faa9-eb7d-4126-bf8f-6653f8ff3591",
                                        "Type": "Layout",
                                        "HintText": "Schadenstypen (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Schadenstypen",
                                            "OriginalCaption": "Schadenstypen",
                                            "Id": "f9b1faa9-eb7d-4126-bf8f-6653f8ff3591_LayoutControlGroup_5015400",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Fahrzeugtypgruppen",
                                    "OriginalCaption": "Fahrzeugtypgruppen",
                                    "Id": "60218",
                                    "Type": "Dialog",
                                    "HintText": "Fahrzeugtypgruppen",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeuggruppen (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeuggruppen (Soloplan-Vorgabe)",
                                        "Id": "eb378cad-33da-42a5-871d-d208468a3c9b",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeuggruppen (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Fahrzeugtypgruppen",
                                            "OriginalCaption": "Fahrzeugtypgruppen",
                                            "Id": "eb378cad-33da-42a5-871d-d208468a3c9b_LayoutControlGroup_5035400",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Fahrzeugtypkombinationen",
                                    "OriginalCaption": "Fahrzeugtypkombinationen",
                                    "Id": "60219",
                                    "Type": "Dialog",
                                    "HintText": "Fahrzeugtypkombinationen",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeugtypkombination (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Fahrzeugtypkombination (Soloplan-Vorgabe)",
                                        "Id": "67385b09-cf0c-4ea7-8814-6d21181f3983",
                                        "Type": "Layout",
                                        "HintText": "Fahrzeugtypkombination (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Fahrzeugtypkombinationen",
                                            "OriginalCaption": "Fahrzeugtypkombinationen",
                                            "Id": "67385b09-cf0c-4ea7-8814-6d21181f3983_LayoutControlGroup_5035500",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Transportarten",
                                    "OriginalCaption": "Transportarten",
                                    "Id": "60209",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Transportarten (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Transportarten (Soloplan-Vorgabe)",
                                        "Id": "cdb17caa-8f80-45fe-b184-472c2a37f82a",
                                        "Type": "Layout",
                                        "HintText": "Transportarten (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Transportarten",
                                            "OriginalCaption": "Transportarten",
                                            "Id": "cdb17caa-8f80-45fe-b184-472c2a37f82a_LayoutControlGroup_5011500",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                            {
                                                "Caption": "Benutzerdefinierte Felder",
                                                "OriginalCaption": "Benutzerdefinierte Felder",
                                                "Id": "cdb17caa-8f80-45fe-b184-472c2a37f82a_LayoutControlGroup_5011500_700000",
                                                "Type": "TabSheet",
                                                "HintText": "",
                                                "Level": 5,
                                                "Children": null
                                            }
                                        ]
                                    }]
                                },
                                {
                                    "Caption": "Typkombinations-Relationen",
                                    "OriginalCaption": "Typkombinations-Relationen",
                                    "Id": "60609",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "VehicleTypeCombinationRelation (Soloplan-Vorgabe)",
                                        "OriginalCaption": "VehicleTypeCombinationRelation (Soloplan-Vorgabe)",
                                        "Id": "fe5d272a-3845-497c-8f2f-3e3ef9c22500",
                                        "Type": "Layout",
                                        "HintText": "VehicleTypeCombinationRelation (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Typkombinations-Relationen",
                                            "OriginalCaption": "Typkombinations-Relationen",
                                            "Id": "fe5d272a-3845-497c-8f2f-3e3ef9c22500_LayoutControlGroup_5061800",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                }
                            ]
                        },
                            {
                                "Caption": "Fahrzeuge",
                                "OriginalCaption": "Fahrzeuge",
                                "Id": "60201",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Fahrzeuge (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Fahrzeuge (Soloplan-Vorgabe)",
                                    "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2",
                                    "Type": "Layout",
                                    "HintText": "Fahrzeuge (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeuge",
                                        "OriginalCaption": "Fahrzeuge",
                                        "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Fahrzeuggruppen",
                                            "OriginalCaption": "Fahrzeuggruppen",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_130011",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Kosten",
                                            "OriginalCaption": "Kosten",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_130026",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Deckungsbeitrag",
                                            "OriginalCaption": "Deckungsbeitrag",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{85CD0D65-74F0-423D-A194-486A998E0265}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Kapitalwerte",
                                            "OriginalCaption": "Kapitalwerte",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{18A4C9E1-295D-4DD0-B2B9-6BFF8CA6A688}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Technische Daten",
                                            "OriginalCaption": "Technische Daten",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_130024",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Maße",
                                            "OriginalCaption": "Maße",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{8F5C9176-B79E-473E-B20F-DE04D6F34CCB}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Fahrzeugbrief",
                                            "OriginalCaption": "Fahrzeugbrief",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{968A6270-498E-4E5F-BAFD-3638B8C512CD}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Disposition",
                                            "OriginalCaption": "Disposition",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{1DB3835D-1BE3-4E2F-BF8A-0E81985033AA}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "FiBu/ Belegimport",
                                            "OriginalCaption": "FiBu/ Belegimport",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{78297D04-17F0-404C-A5EF-D198520C0A35}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Ausstattung",
                                            "OriginalCaption": "Ausstattung",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_130008",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Genehmigungen",
                                            "OriginalCaption": "Genehmigungen",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{649C170F-B7CD-4857-8FED-BAA9AEE315EE}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Fahrer/ Anhänger",
                                            "OriginalCaption": "Fahrer/ Anhänger",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{0EAD5620-149E-43A4-9A6A-940412210F2C}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Info/ Nachschlagefelder",
                                            "OriginalCaption": "Info/ Nachschlagefelder",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{F8E87A8C-78B5-4228-8BEE-ABC6625876B9}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Reifen",
                                            "OriginalCaption": "Reifen",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_130096",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Telematik",
                                            "OriginalCaption": "Telematik",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{413F8B3E-6BC8-4F35-BC60-5510C9BF9E5F}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Standort",
                                            "OriginalCaption": "Standort",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{BB5BACD9-473B-41B3-9257-E8E09C54E17A}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Cockpit",
                                            "OriginalCaption": "Cockpit",
                                            "Id": "18d9c31d-78e5-47c0-9456-e90ea2319dc2_LayoutControlGroup_130000_{E8F0FE11-A6A2-489C-9D48-0B44A65DEC3C}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Fahrzeuggruppen",
                                "OriginalCaption": "Fahrzeuggruppen",
                                "Id": "60203",
                                "Type": "Dialog",
                                "HintText": "Fahrzeuggruppen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Fahrzeuggruppen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Fahrzeuggruppen (Soloplan-Vorgabe)",
                                    "Id": "5388ca07-fe2d-4154-b9a1-744aa72cb84a",
                                    "Type": "Layout",
                                    "HintText": "Fahrzeuggruppen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrzeuggruppen",
                                        "OriginalCaption": "Fahrzeuggruppen",
                                        "Id": "5388ca07-fe2d-4154-b9a1-744aa72cb84a_LayoutControlGroup_5010200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Telematik",
                                            "OriginalCaption": "Telematik",
                                            "Id": "5388ca07-fe2d-4154-b9a1-744aa72cb84a_LayoutControlGroup_5010200_{83224ADC-31E9-4BEC-9AA5-6B55374F0B7D}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "5388ca07-fe2d-4154-b9a1-744aa72cb84a_LayoutControlGroup_5010200_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Verkehrsarten",
                                "OriginalCaption": "Verkehrsarten",
                                "Id": "60217",
                                "Type": "Dialog",
                                "HintText": "Verkehrsarten",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Verkehrsarten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Verkehrsarten (Soloplan-Vorgabe)",
                                    "Id": "869853e8-d96f-41a2-91a1-b990a92f5099",
                                    "Type": "Layout",
                                    "HintText": "Verkehrsarten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Verkehrsarten",
                                        "OriginalCaption": "Verkehrsarten",
                                        "Id": "869853e8-d96f-41a2-91a1-b990a92f5099_LayoutControlGroup_5017500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "869853e8-d96f-41a2-91a1-b990a92f5099_LayoutControlGroup_5017500_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Fahrzeug Zuordnungen",
                                "OriginalCaption": "Fahrzeug Zuordnungen",
                                "Id": "64011",
                                "Type": "Dialog",
                                "HintText": "Fahrzeug Zuordnungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Fahrzeug Zuordnungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Fahrzeug Zuordnungen (Soloplan-Vorgabe)",
                                    "Id": "83cdc638-8fac-46a1-8c44-99d15daa9501",
                                    "Type": "Layout",
                                    "HintText": "Fahrzeug Zuordnungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Gruppenzuordnungen",
                                        "OriginalCaption": "Gruppenzuordnungen",
                                        "Id": "83cdc638-8fac-46a1-8c44-99d15daa9501_LayoutControlGroup_5064300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Personal",
                        "OriginalCaption": "Personal",
                        "Id": "60300",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Personal",
                            "OriginalCaption": "Personal",
                            "Id": "60301",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Personal (Soloplan-Vorgabe)",
                                "OriginalCaption": "Personal (Soloplan-Vorgabe)",
                                "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61",
                                "Type": "Layout",
                                "HintText": "Personal (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Personal",
                                    "OriginalCaption": "Personal",
                                    "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Gruppen",
                                        "OriginalCaption": "Gruppen",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{9412ACB2-DE24-4ea6-9A74-6D449AA1D00D}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Qualifikationen",
                                        "OriginalCaption": "Qualifikationen",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{59C759C7-0A3D-4492-9E15-8411F90041BD}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Details",
                                        "OriginalCaption": "Details",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{03524ACC-D4A0-4bfe-9903-2E5BAA535AF1}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Arbeitsverträge",
                                        "OriginalCaption": "Arbeitsverträge",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{21C0A0B0-DE49-42f2-A598-D616F56D4AD3}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Kosten",
                                        "OriginalCaption": "Kosten",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{66C27D85-AE8A-46a5-9D97-086699FE666E}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Telematik",
                                        "OriginalCaption": "Telematik",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{92075E7D-DD29-4db4-B18A-0428A2064BFA}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Fahrerkarte",
                                        "OriginalCaption": "Fahrerkarte",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{A9EC279E-C3A4-4863-B662-4A31DB801077}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Ausstattungen",
                                        "OriginalCaption": "Ausstattungen",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_50128",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Infofelder",
                                        "OriginalCaption": "Infofelder",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_{280A1BA5-4D7A-42b7-8E08-988C41D65132}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "e1ea088e-3e65-44ba-b665-12d30247fb61_LayoutControlGroup_50000_700000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Personalgruppen",
                                "OriginalCaption": "Personalgruppen",
                                "Id": "60302",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Personalgruppen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Personalgruppen (Soloplan-Vorgabe)",
                                    "Id": "a19180a3-05f8-4ed3-ad3c-c472c9ec0c35",
                                    "Type": "Layout",
                                    "HintText": "Personalgruppen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Personalgruppe",
                                        "OriginalCaption": "Personalgruppe",
                                        "Id": "a19180a3-05f8-4ed3-ad3c-c472c9ec0c35_LayoutControlGroup_5006500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "a19180a3-05f8-4ed3-ad3c-c472c9ec0c35_LayoutControlGroup_5006500_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Personalqualifikationen",
                                "OriginalCaption": "Personalqualifikationen",
                                "Id": "60303",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Personalqualifikationen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Personalqualifikationen (Soloplan-Vorgabe)",
                                    "Id": "914b8451-e8e7-4f2b-982e-d5d5f67d0bbe",
                                    "Type": "Layout",
                                    "HintText": "Personalqualifikationen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Personalqualifikationen",
                                        "OriginalCaption": "Personalqualifikationen",
                                        "Id": "914b8451-e8e7-4f2b-982e-d5d5f67d0bbe_LayoutControlGroup_5011300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Lenkzeitprofile",
                                "OriginalCaption": "Lenkzeitprofile",
                                "Id": "60304",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Lenkzeitprofile (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Lenkzeitprofile (Soloplan-Vorgabe)",
                                    "Id": "6389a118-7f8c-43dc-b1e2-315125d57767",
                                    "Type": "Layout",
                                    "HintText": "Lenkzeitprofile (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Lenkzeitprofile",
                                        "OriginalCaption": "Lenkzeitprofile",
                                        "Id": "6389a118-7f8c-43dc-b1e2-315125d57767_LayoutControlGroup_5012900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Personal Zuordnungen",
                                "OriginalCaption": "Personal Zuordnungen",
                                "Id": "60305",
                                "Type": "Dialog",
                                "HintText": "Personal Zuordnungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Personal Zuordnungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Personal Zuordnungen (Soloplan-Vorgabe)",
                                    "Id": "83cdc638-8fac-46a2-8c64-99d15dab9503",
                                    "Type": "Layout",
                                    "HintText": "Personal Zuordnungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Gruppenzuordnungen",
                                        "OriginalCaption": "Gruppenzuordnungen",
                                        "Id": "83cdc638-8fac-46a2-8c64-99d15dab9503_LayoutControlGroup_5064300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Konditionen",
                        "OriginalCaption": "Konditionen",
                        "Id": "60400",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Preisvorschriften",
                            "OriginalCaption": "Preisvorschriften",
                            "Id": "60401",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Preisvorschriften (Soloplan-Vorgabe)",
                                "OriginalCaption": "Preisvorschriften (Soloplan-Vorgabe)",
                                "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4",
                                "Type": "Layout",
                                "HintText": "Preisvorschriften (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Preisvorschriften",
                                    "OriginalCaption": "Preisvorschriften",
                                    "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Tabelle",
                                        "OriginalCaption": "Tabelle",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{3DA16843-1B02-40CB-A1DB-16FB05330AC9}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Formel",
                                        "OriginalCaption": "Formel",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{BDD5B759-4A86-4187-9080-0AEE67C73E73}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Tarif",
                                        "OriginalCaption": "Tarif",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{8F9C2BDD-D1CC-4763-A59B-F6BEBF6046C5}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Pauschale",
                                        "OriginalCaption": "Pauschale",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{C0381513-25FF-43F5-8A82-760709BC9AED}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Hausfracht",
                                        "OriginalCaption": "Hausfracht",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{AD3ACEF7-E91F-4586-A2EF-3BF9848ED8D2}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Vergleich",
                                        "OriginalCaption": "Vergleich",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{AC548777-9295-4018-84EF-2FF0CD2AD495}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Sperrigkeit",
                                        "OriginalCaption": "Sperrigkeit",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{800C31F3-9DA9-43c6-AAB8-7379EEA3D533}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "FiBu",
                                        "OriginalCaption": "FiBu",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_{E0EDFDF7-7D21-4179-9DA4-2A0FF6CC19D9}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "c4963b62-a868-4f10-9dbe-599de78c8bb4_LayoutControlGroup_5028600_700000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Konditionen",
                                "OriginalCaption": "Konditionen",
                                "Id": "60403",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Konditionen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Konditionen (Soloplan-Vorgabe)",
                                    "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119",
                                    "Type": "Layout",
                                    "HintText": "Konditionen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Konditionen",
                                        "OriginalCaption": "Konditionen",
                                        "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_5010600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Gruppierung",
                                            "OriginalCaption": "Gruppierung",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_5010600_{FE096A9C-5A3C-4F39-B1F7-490754FF3326}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Ermittlung",
                                            "OriginalCaption": "Ermittlung",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_5010600_{96258EA9-10BE-402B-8E59-2ED85DA1E366}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Vorlauf",
                                            "OriginalCaption": "Vorlauf",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_1028000_1028002",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Hauptlauf",
                                            "OriginalCaption": "Hauptlauf",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_1028000_1028003",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Nachlauf",
                                            "OriginalCaption": "Nachlauf",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_1028000_1028004",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Rückverteilung",
                                            "OriginalCaption": "Rückverteilung",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_5010600_{4447BF08-4928-44C2-B6B9-005B7FBC4CEF}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "FiBu",
                                            "OriginalCaption": "FiBu",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_5010600_{9520BC7A-E1DC-440F-B23C-5913836A4798}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "447d0caf-f10d-4125-a3ef-109e56c7d119_LayoutControlGroup_5010600_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Konditionsrelationen",
                                "OriginalCaption": "Konditionsrelationen",
                                "Id": "60404",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Konditionsrelationen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Konditionsrelationen (Soloplan-Vorgabe)",
                                    "Id": "9ffa2e64-169d-4b92-93bc-f18b863e63c9",
                                    "Type": "Layout",
                                    "HintText": "Konditionsrelationen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Konditionsrelationen",
                                        "OriginalCaption": "Konditionsrelationen",
                                        "Id": "9ffa2e64-169d-4b92-93bc-f18b863e63c9_LayoutControlGroup_5016600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Mandanten",
                                            "OriginalCaption": "Mandanten",
                                            "Id": "9ffa2e64-169d-4b92-93bc-f18b863e63c9_LayoutControlGroup_5016600_5016605",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Konditionsrelationsgruppen",
                                            "OriginalCaption": "Konditionsrelationsgruppen",
                                            "Id": "9ffa2e64-169d-4b92-93bc-f18b863e63c9_LayoutControlGroup_5016600_5016613",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Bedingungen",
                                            "OriginalCaption": "Bedingungen",
                                            "Id": "9ffa2e64-169d-4b92-93bc-f18b863e63c9_LayoutControlGroup_5016600_{E71DB91A-89E2-4A9A-B2EF-71333EF5958B}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "9ffa2e64-169d-4b92-93bc-f18b863e63c9_LayoutControlGroup_5016600_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Kraftstoffe",
                                "OriginalCaption": "Kraftstoffe",
                                "Id": "60406",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Kraftstoffe (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Kraftstoffe (Soloplan-Vorgabe)",
                                    "Id": "6d843fff-8372-4b34-b837-e0b79ede38cd",
                                    "Type": "Layout",
                                    "HintText": "Kraftstoffe (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Kraftstoffe",
                                        "OriginalCaption": "Kraftstoffe",
                                        "Id": "6d843fff-8372-4b34-b837-e0b79ede38cd_LayoutControlGroup_5009700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Sonderkosten",
                                "OriginalCaption": "Sonderkosten",
                                "Id": "60405",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Sonderkosten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Sonderkosten (Soloplan-Vorgabe)",
                                    "Id": "58e0cb1f-984d-4af7-88ce-1ef2ee62f260",
                                    "Type": "Layout",
                                    "HintText": "Sonderkosten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Sonderkosten",
                                        "OriginalCaption": "Sonderkosten",
                                        "Id": "58e0cb1f-984d-4af7-88ce-1ef2ee62f260_LayoutControlGroup_5016900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "58e0cb1f-984d-4af7-88ce-1ef2ee62f260_LayoutControlGroup_5016900_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Leistungsarten",
                                "OriginalCaption": "Leistungsarten",
                                "Id": "60408",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Leistungsarten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Leistungsarten (Soloplan-Vorgabe)",
                                    "Id": "ac6fe12e-9548-47fb-8b4d-2247a738ed4b",
                                    "Type": "Layout",
                                    "HintText": "Leistungsarten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Leistungsarten",
                                        "OriginalCaption": "Leistungsarten",
                                        "Id": "ac6fe12e-9548-47fb-8b4d-2247a738ed4b_LayoutControlGroup_5031500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "ac6fe12e-9548-47fb-8b4d-2247a738ed4b_LayoutControlGroup_5031500_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Leistungstypen",
                                "OriginalCaption": "Leistungstypen",
                                "Id": "60409",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Leistungsartentypen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Leistungsartentypen (Soloplan-Vorgabe)",
                                    "Id": "933cc6f6-9614-4af0-9ca4-2bc8bf84a643",
                                    "Type": "Layout",
                                    "HintText": "Leistungsartentypen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Leistungstypen",
                                        "OriginalCaption": "Leistungstypen",
                                        "Id": "933cc6f6-9614-4af0-9ca4-2bc8bf84a643_LayoutControlGroup_5031600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Routenlisten",
                                "OriginalCaption": "Routenlisten",
                                "Id": "60407",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Routen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Routen (Soloplan-Vorgabe)",
                                    "Id": "7bfa896f-2ab9-4b53-9522-1e7669054587",
                                    "Type": "Layout",
                                    "HintText": "Routen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Routenlisten",
                                        "OriginalCaption": "Routenlisten",
                                        "Id": "7bfa896f-2ab9-4b53-9522-1e7669054587_LayoutControlGroup_5019500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Konditionsrelationsgruppen",
                                "OriginalCaption": "Konditionsrelationsgruppen",
                                "Id": "60410",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Konditionsrelationengruppen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Konditionsrelationengruppen (Soloplan-Vorgabe)",
                                    "Id": "f79fddc0-d0f4-42e7-9180-c413c440e83f",
                                    "Type": "Layout",
                                    "HintText": "Konditionsrelationengruppen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Konditionsrelationsgruppen",
                                        "OriginalCaption": "Konditionsrelationsgruppen",
                                        "Id": "f79fddc0-d0f4-42e7-9180-c413c440e83f_LayoutControlGroup_5039400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "f79fddc0-d0f4-42e7-9180-c413c440e83f_LayoutControlGroup_5039400_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Abrechnungszwecke",
                                "OriginalCaption": "Abrechnungszwecke",
                                "Id": "62018",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Abrechnungszweck (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Abrechnungszweck (Soloplan-Vorgabe)",
                                    "Id": "78f6585b-369a-46f7-b292-374197ef205b",
                                    "Type": "Layout",
                                    "HintText": "Abrechnungszweck (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Abrechnungszwecke",
                                        "OriginalCaption": "Abrechnungszwecke",
                                        "Id": "78f6585b-369a-46f7-b292-374197ef205b_LayoutControlGroup_5040000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "78f6585b-369a-46f7-b292-374197ef205b_LayoutControlGroup_5040000_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Zahlungsbedingungen",
                                "OriginalCaption": "Zahlungsbedingungen",
                                "Id": "62008",
                                "Type": "Dialog",
                                "HintText": "Zahlungsbedingungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Zahlungsbedingungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Zahlungsbedingungen (Soloplan-Vorgabe)",
                                    "Id": "2deb170c-c446-4212-93f5-de01e892c041",
                                    "Type": "Layout",
                                    "HintText": "Zahlungsbedingungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Zahlungsbedingung",
                                        "OriginalCaption": "Zahlungsbedingung",
                                        "Id": "2deb170c-c446-4212-93f5-de01e892c041_LayoutControlGroup_5032500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Zahlungsbedingungsrelationen",
                                "OriginalCaption": "Zahlungsbedingungsrelationen",
                                "Id": "64014",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Zahlungsbedingungsrelationen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Zahlungsbedingungsrelationen (Soloplan-Vorgabe)",
                                    "Id": "534ebf0c-ae23-4151-936f-753feb48631d",
                                    "Type": "Layout",
                                    "HintText": "Zahlungsbedingungsrelationen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Zahlungsbedingungsrelationen",
                                        "OriginalCaption": "Zahlungsbedingungsrelationen",
                                        "Id": "534ebf0c-ae23-4151-936f-753feb48631d_LayoutControlGroup_5719900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Bedingungen",
                                            "OriginalCaption": "Bedingungen",
                                            "Id": "534ebf0c-ae23-4151-936f-753feb48631d_LayoutControlGroup_5719900_{06F42FED-5548-4D7F-8F28-3560CFDE7944}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Toleranzrelationen",
                                "OriginalCaption": "Toleranzrelationen",
                                "Id": "64013",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Toleranzrelationen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Toleranzrelationen (Soloplan-Vorgabe)",
                                    "Id": "6e4f35b5-30ce-4e2a-94e9-263e292eefb7",
                                    "Type": "Layout",
                                    "HintText": "Toleranzrelationen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Toleranzrelationen",
                                        "OriginalCaption": "Toleranzrelationen",
                                        "Id": "6e4f35b5-30ce-4e2a-94e9-263e292eefb7_LayoutControlGroup_5720300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Versand",
                        "OriginalCaption": "Versand",
                        "Id": "60500",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Gefahrgut",
                            "OriginalCaption": "Gefahrgut",
                            "Id": "62009",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Gefahrgüter",
                                "OriginalCaption": "Gefahrgüter",
                                "Id": "62010",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Gefahrgut (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Gefahrgut (Soloplan-Vorgabe)",
                                    "Id": "efc0df59-bbac-4767-9394-739fcaabd55a",
                                    "Type": "Layout",
                                    "HintText": "Gefahrgut (Soloplan-Vorgabe)",
                                    "Level": 4,
                                    "Children": [{
                                        "Caption": "Gefahrgüter",
                                        "OriginalCaption": "Gefahrgüter",
                                        "Id": "efc0df59-bbac-4767-9394-739fcaabd55a_LayoutControlGroup_5033700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 5,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Luft-/Seefracht",
                                            "OriginalCaption": "Luft-/Seefracht",
                                            "Id": "efc0df59-bbac-4767-9394-739fcaabd55a_LayoutControlGroup_5033700_{8C29D60F-E4BC-4341-B630-8EE5E455FB2B}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "efc0df59-bbac-4767-9394-739fcaabd55a_LayoutControlGroup_5033700_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                                {
                                    "Caption": "Freigestellte Mengen",
                                    "OriginalCaption": "Freigestellte Mengen",
                                    "Id": "62011",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "FreigestellteMengen (Soloplan-Vorgabe)",
                                        "OriginalCaption": "FreigestellteMengen (Soloplan-Vorgabe)",
                                        "Id": "e141e9c8-ad70-4c04-95b7-80ee604b4f41",
                                        "Type": "Layout",
                                        "HintText": "FreigestellteMengen (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Freigestellte Mengen",
                                            "OriginalCaption": "Freigestellte Mengen",
                                            "Id": "e141e9c8-ad70-4c04-95b7-80ee604b4f41_LayoutControlGroup_5033600",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                },
                                {
                                    "Caption": "Beförderungskategorien",
                                    "OriginalCaption": "Beförderungskategorien",
                                    "Id": "62012",
                                    "Type": "Dialog",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Beförderungskategorien (Soloplan-Vorgabe)",
                                        "OriginalCaption": "Beförderungskategorien (Soloplan-Vorgabe)",
                                        "Id": "2398cdd9-b5a4-4cdf-b40d-0a46e6c78935",
                                        "Type": "Layout",
                                        "HintText": "Beförderungskategorien (Soloplan-Vorgabe)",
                                        "Level": 4,
                                        "Children": [{
                                            "Caption": "Beförderungskategorien",
                                            "OriginalCaption": "Beförderungskategorien",
                                            "Id": "2398cdd9-b5a4-4cdf-b40d-0a46e6c78935_LayoutControlGroup_5033500",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 5,
                                            "Children": null
                                        }]
                                    }]
                                }
                            ]
                        },
                            {
                                "Caption": "Artikel",
                                "OriginalCaption": "Artikel",
                                "Id": "60503",
                                "Type": "Dialog",
                                "HintText": "Dialog zum Bearbeiten von Artikeln",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Artikel (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Artikel (Soloplan-Vorgabe)",
                                    "Id": "8c378737-82c6-4c33-a54c-5b413760fab9",
                                    "Type": "Layout",
                                    "HintText": "Artikel (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Artikel",
                                        "OriginalCaption": "Artikel",
                                        "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Maße",
                                            "OriginalCaption": "Maße",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{9F973473-9951-4314-98E8-B24D0C3AB4D4}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Gruppen",
                                            "OriginalCaption": "Gruppen",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{D0F26382-8A1B-4ba5-BE77-C04885A3D494}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Gefahrgut",
                                            "OriginalCaption": "Gefahrgut",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{BAFC8DC6-3F10-4E79-A7CD-AE4FB861CC41}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Fibu",
                                            "OriginalCaption": "Fibu",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{1DCD04FF-D92F-4b21-9B60-9CF9B370CF11}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Lager",
                                            "OriginalCaption": "Lager",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{DCD14945-AE60-47f7-8DB0-48BFEEE90439}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Varianten",
                                            "OriginalCaption": "Varianten",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{AF70154E-29C4-4554-BA33-12A1B78C582E}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Ausstattungen",
                                            "OriginalCaption": "Ausstattungen",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{ED903ABF-1196-4a32-A5FC-11E2CCE988B5}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Formeln",
                                            "OriginalCaption": "Formeln",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{47193C92-CD0E-4c33-9181-C1DB8B183627}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Belegerfassung",
                                            "OriginalCaption": "Belegerfassung",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_{F702A348-79F8-4AA8-9214-58456D502B4A}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "8c378737-82c6-4c33-a54c-5b413760fab9_LayoutControlGroup_125000_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Artikelgruppen",
                                "OriginalCaption": "Artikelgruppen",
                                "Id": "60504",
                                "Type": "Dialog",
                                "HintText": "Artikelgruppen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Artikelgruppen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Artikelgruppen (Soloplan-Vorgabe)",
                                    "Id": "38930463-8e6b-4a49-8da6-22cdabe436cf",
                                    "Type": "Layout",
                                    "HintText": "Artikelgruppen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Artikelgruppen",
                                        "OriginalCaption": "Artikelgruppen",
                                        "Id": "38930463-8e6b-4a49-8da6-22cdabe436cf_LayoutControlGroup_5010900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Artikel",
                                            "OriginalCaption": "Artikel",
                                            "Id": "38930463-8e6b-4a49-8da6-22cdabe436cf_LayoutControlGroup_5010900_{C76E8C98-DE1F-4afa-9D3E-2198C6C09809}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Verpackung",
                                "OriginalCaption": "Verpackung",
                                "Id": "60501",
                                "Type": "Dialog",
                                "HintText": "Verpackungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Verpackung (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Verpackung (Soloplan-Vorgabe)",
                                    "Id": "75764002-2d49-43c9-9543-591c97db7db5",
                                    "Type": "Layout",
                                    "HintText": "Verpackung (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Verpackung",
                                        "OriginalCaption": "Verpackung",
                                        "Id": "75764002-2d49-43c9-9543-591c97db7db5_LayoutControlGroup_5005800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Maße",
                                            "OriginalCaption": "Maße",
                                            "Id": "75764002-2d49-43c9-9543-591c97db7db5_LayoutControlGroup_5005800_{F51131B1-2095-4236-871E-DE9B530DA74D}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Gefahrgut",
                                            "OriginalCaption": "Gefahrgut",
                                            "Id": "75764002-2d49-43c9-9543-591c97db7db5_LayoutControlGroup_5005800_{081C94D7-E8D3-4E2B-88D7-56C3EE659A53}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Ausstattungen",
                                            "OriginalCaption": "Ausstattungen",
                                            "Id": "75764002-2d49-43c9-9543-591c97db7db5_LayoutControlGroup_5005800_5005831",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "75764002-2d49-43c9-9543-591c97db7db5_LayoutControlGroup_5005800_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Lademittel",
                                "OriginalCaption": "Lademittel",
                                "Id": "60502",
                                "Type": "Dialog",
                                "HintText": "Dialog zum Bearbeiten von Lademitteln.",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Lademittel (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Lademittel (Soloplan-Vorgabe)",
                                    "Id": "00d385fd-82f2-4560-a7cb-d906f3178651",
                                    "Type": "Layout",
                                    "HintText": "Lademittel (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Lademittel",
                                        "OriginalCaption": "Lademittel",
                                        "Id": "00d385fd-82f2-4560-a7cb-d906f3178651_LayoutControlGroup_5001500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Maße",
                                            "OriginalCaption": "Maße",
                                            "Id": "00d385fd-82f2-4560-a7cb-d906f3178651_LayoutControlGroup_5001500_{30824DB5-FA06-4a67-9F7F-FD9D932F34C7}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Externe Referenzen",
                                            "OriginalCaption": "Externe Referenzen",
                                            "Id": "00d385fd-82f2-4560-a7cb-d906f3178651_LayoutControlGroup_5001500_{71A30C20-80EF-46D1-8E3C-FF4C918E0C4C}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Ausstattungen",
                                            "OriginalCaption": "Ausstattungen",
                                            "Id": "00d385fd-82f2-4560-a7cb-d906f3178651_LayoutControlGroup_5001500_5001530",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "00d385fd-82f2-4560-a7cb-d906f3178651_LayoutControlGroup_5001500_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Artikelinhalt",
                                "OriginalCaption": "Artikelinhalt",
                                "Id": "61004",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Artikelinhalt (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Artikelinhalt (Soloplan-Vorgabe)",
                                    "Id": "e816fcd3-2123-45e7-9312-5a7201fd732e",
                                    "Type": "Layout",
                                    "HintText": "Artikelinhalt (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Artikelinhalt",
                                        "OriginalCaption": "Artikelinhalt",
                                        "Id": "e816fcd3-2123-45e7-9312-5a7201fd732e_LayoutControlGroup_5017200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Verkaufsarten",
                                "OriginalCaption": "Verkaufsarten",
                                "Id": "60507",
                                "Type": "Dialog",
                                "HintText": "Verkaufsarten",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Verkaufsarten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Verkaufsarten (Soloplan-Vorgabe)",
                                    "Id": "2e4c69ac-1101-4998-8cbd-868ca208cfd5",
                                    "Type": "Layout",
                                    "HintText": "Verkaufsarten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Verkaufsarten",
                                        "OriginalCaption": "Verkaufsarten",
                                        "Id": "2e4c69ac-1101-4998-8cbd-868ca208cfd5_LayoutControlGroup_5011600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "2e4c69ac-1101-4998-8cbd-868ca208cfd5_LayoutControlGroup_5011600_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "AES Befreiung/Ausschluss",
                                "OriginalCaption": "AES Befreiung/Ausschluss",
                                "Id": "60508",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            }
                        ]
                    },
                    {
                        "Caption": "Disposition",
                        "OriginalCaption": "Disposition",
                        "Id": "60600",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Ermittlung Ladestellen",
                            "OriginalCaption": "Ermittlung Ladestellen",
                            "Id": "60808",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Ermittlung Ladestellen (Soloplan-Vorgabe)",
                                "OriginalCaption": "Ermittlung Ladestellen (Soloplan-Vorgabe)",
                                "Id": "a5f352f2-49ea-4705-be8b-86a429ac9537",
                                "Type": "Layout",
                                "HintText": "Ermittlung Ladestellen (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Ermittlung Ladestellen",
                                    "OriginalCaption": "Ermittlung Ladestellen",
                                    "Id": "a5f352f2-49ea-4705-be8b-86a429ac9537_LayoutControlGroup_5029700",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Quick-Steps",
                                "OriginalCaption": "Quick-Steps",
                                "Id": "64017",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Quick-Steps (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Quick-Steps (Soloplan-Vorgabe)",
                                    "Id": "de3f8e19-55f1-409a-ac33-52fd0a41bab2",
                                    "Type": "Layout",
                                    "HintText": "Quick-Steps (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Quick-Steps",
                                        "OriginalCaption": "Quick-Steps",
                                        "Id": "de3f8e19-55f1-409a-ac33-52fd0a41bab2_LayoutControlGroup_5726800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Bedingungen",
                                            "OriginalCaption": "Bedingungen",
                                            "Id": "de3f8e19-55f1-409a-ac33-52fd0a41bab2_LayoutControlGroup_5726800_{C01C2053-7026-4FAA-9217-A8E6EACAF0E7}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Sendungsstatus",
                                "OriginalCaption": "Sendungsstatus",
                                "Id": "60819",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "TransportPlanningStatus (Soloplan-Vorgabe)",
                                    "OriginalCaption": "TransportPlanningStatus (Soloplan-Vorgabe)",
                                    "Id": "12e024f4-575e-46fa-a374-aa69b9e533c4",
                                    "Type": "Layout",
                                    "HintText": "TransportPlanningStatus (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Sendungsstatus",
                                        "OriginalCaption": "Sendungsstatus",
                                        "Id": "12e024f4-575e-46fa-a374-aa69b9e533c4_LayoutControlGroup_5715100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Auftraggeber",
                                            "OriginalCaption": "Auftraggeber",
                                            "Id": "12e024f4-575e-46fa-a374-aa69b9e533c4_LayoutControlGroup_5715100_{DFC07DF3-B462-49AA-A4A5-CBFDF9ECE7A7}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Sonderziele",
                                "OriginalCaption": "Sonderziele",
                                "Id": "60607",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Sonderziele (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Sonderziele (Soloplan-Vorgabe)",
                                    "Id": "5698863c-01eb-45dc-8b05-d3b19a37df13",
                                    "Type": "Layout",
                                    "HintText": "Sonderziele (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Sonderziele",
                                        "OriginalCaption": "Sonderziele",
                                        "Id": "5698863c-01eb-45dc-8b05-d3b19a37df13_LayoutControlGroup_5025600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Tourkategorien",
                                "OriginalCaption": "Tourkategorien",
                                "Id": "62007",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Tourkategorien (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Tourkategorien (Soloplan-Vorgabe)",
                                    "Id": "e18d747d-02f0-48e6-9507-062f51074fee",
                                    "Type": "Layout",
                                    "HintText": "Tourkategorien (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Tourkategorien",
                                        "OriginalCaption": "Tourkategorien",
                                        "Id": "e18d747d-02f0-48e6-9507-062f51074fee_LayoutControlGroup_5029500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Gebietsrelationsgruppen",
                                "OriginalCaption": "Gebietsrelationsgruppen",
                                "Id": "62014",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Gebietsrelationengruppe (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Gebietsrelationengruppe (Soloplan-Vorgabe)",
                                    "Id": "c55c929f-a566-4f0f-964f-9f67588f9807",
                                    "Type": "Layout",
                                    "HintText": "Gebietsrelationengruppe (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Gebietsrelationsgruppen",
                                        "OriginalCaption": "Gebietsrelationsgruppen",
                                        "Id": "c55c929f-a566-4f0f-964f-9f67588f9807_LayoutControlGroup_5037800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Gebiete",
                                "OriginalCaption": "Gebiete",
                                "Id": "62015",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Gebiete (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Gebiete (Soloplan-Vorgabe)",
                                    "Id": "d0dec3d6-a260-4c40-8ce6-f61331c25885",
                                    "Type": "Layout",
                                    "HintText": "Gebiete (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Gebiete",
                                        "OriginalCaption": "Gebiete",
                                        "Id": "d0dec3d6-a260-4c40-8ce6-f61331c25885_LayoutControlGroup_5038100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Netzwerkrelationen",
                                "OriginalCaption": "Netzwerkrelationen",
                                "Id": "64103",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Netzwerkrelation (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Netzwerkrelation (Soloplan-Vorgabe)",
                                    "Id": "26de6c6b-6317-4d51-a87f-759fe67b387f",
                                    "Type": "Layout",
                                    "HintText": "Netzwerkrelation (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Netzwerkrelation",
                                        "OriginalCaption": "Netzwerkrelation",
                                        "Id": "26de6c6b-6317-4d51-a87f-759fe67b387f_LayoutControlGroup_5729700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Transportketten",
                                "OriginalCaption": "Transportketten",
                                "Id": "62016",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Transportketten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Transportketten (Soloplan-Vorgabe)",
                                    "Id": "9be68fc9-e6a6-4fce-81b4-9a3aec878ead",
                                    "Type": "Layout",
                                    "HintText": "Transportketten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Transportkette",
                                        "OriginalCaption": "Transportkette",
                                        "Id": "9be68fc9-e6a6-4fce-81b4-9a3aec878ead_LayoutControlGroup_5038400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Externe Referenzen",
                                            "OriginalCaption": "Externe Referenzen",
                                            "Id": "9be68fc9-e6a6-4fce-81b4-9a3aec878ead_LayoutControlGroup_5038400_{DE0B94F8-CDE2-4122-816E-81CBA5A30F0B}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "9be68fc9-e6a6-4fce-81b4-9a3aec878ead_LayoutControlGroup_5038400_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Änderungsprofile",
                                "OriginalCaption": "Änderungsprofile",
                                "Id": "62017",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Änderungsprofile (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Änderungsprofile (Soloplan-Vorgabe)",
                                    "Id": "5ce50380-576e-4f33-98df-c6cc862b3ad2",
                                    "Type": "Layout",
                                    "HintText": "Änderungsprofile (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Änderungsprofile",
                                        "OriginalCaption": "Änderungsprofile",
                                        "Id": "5ce50380-576e-4f33-98df-c6cc862b3ad2_LayoutControlGroup_5039600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Gebietsrelationen",
                                "OriginalCaption": "Gebietsrelationen",
                                "Id": "60601",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "AreaRelations (Soloplan-Vorgabe)",
                                    "OriginalCaption": "AreaRelations (Soloplan-Vorgabe)",
                                    "Id": "a7426848-ac84-4fba-a865-c914ee0733e3",
                                    "Type": "Layout",
                                    "HintText": "AreaRelations (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Gebietsrelationen",
                                        "OriginalCaption": "Gebietsrelationen",
                                        "Id": "a7426848-ac84-4fba-a865-c914ee0733e3_LayoutControlGroup_5011400_{6AB77E0A-AB40-49C6-9589-6491D232152E}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Vorbelegung",
                                            "OriginalCaption": "Vorbelegung",
                                            "Id": "a7426848-ac84-4fba-a865-c914ee0733e3_LayoutControlGroup_5011400_{21EE3E12-FADD-46D0-BA7A-87664A4B6778}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "a7426848-ac84-4fba-a865-c914ee0733e3_LayoutControlGroup_5011400_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "ID-Karten",
                                "OriginalCaption": "ID-Karten",
                                "Id": "60608",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "IDCards (Soloplan-Vorgabe)",
                                    "OriginalCaption": "IDCards (Soloplan-Vorgabe)",
                                    "Id": "ccbc22b1-c03c-492a-ae92-0832383518a8",
                                    "Type": "Layout",
                                    "HintText": "IDCards (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "ID-Karten",
                                        "OriginalCaption": "ID-Karten",
                                        "Id": "ccbc22b1-c03c-492a-ae92-0832383518a8_LayoutControlGroup_5058000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "ccbc22b1-c03c-492a-ae92-0832383518a8_LayoutControlGroup_5058000_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Splitfolgen-Verwaltung",
                                "OriginalCaption": "Splitfolgen-Verwaltung",
                                "Id": "62024",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Splittfolge (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Splittfolge (Soloplan-Vorgabe)",
                                    "Id": "31b5da9e-a621-47e6-a033-427d1d139471",
                                    "Type": "Layout",
                                    "HintText": "Splittfolge (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Splitfolgen-Verwaltung",
                                        "OriginalCaption": "Splitfolgen-Verwaltung",
                                        "Id": "31b5da9e-a621-47e6-a033-427d1d139471_LayoutControlGroup_5064100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Fahrpläne",
                                "OriginalCaption": "Fahrpläne",
                                "Id": "62027",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Fahrpläne Stammdaten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Fahrpläne Stammdaten (Soloplan-Vorgabe)",
                                    "Id": "caecbc60-eb3a-4f42-a875-32d6e0a30122",
                                    "Type": "Layout",
                                    "HintText": "Fahrpläne Stammdaten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fahrpläne",
                                        "OriginalCaption": "Fahrpläne",
                                        "Id": "caecbc60-eb3a-4f42-a875-32d6e0a30122_LayoutControlGroup_5718300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Rundtouren",
                                "OriginalCaption": "Rundtouren",
                                "Id": "64008",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Rundtouren (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Rundtouren (Soloplan-Vorgabe)",
                                    "Id": "12b2764f-0ce9-418b-a6a1-ef779fdb1673",
                                    "Type": "Layout",
                                    "HintText": "Rundtouren (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Rundtouren",
                                        "OriginalCaption": "Rundtouren",
                                        "Id": "12b2764f-0ce9-418b-a6a1-ef779fdb1673_LayoutControlGroup_5069100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Sonstiges",
                        "OriginalCaption": "Sonstiges",
                        "Id": "60800",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Nachschlagefelder",
                            "OriginalCaption": "Nachschlagefelder",
                            "Id": "60850",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": null
                        },
                            {
                                "Caption": "Fakturafreigabe",
                                "OriginalCaption": "Fakturafreigabe",
                                "Id": "64016",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Fakturafreigabe (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Fakturafreigabe (Soloplan-Vorgabe)",
                                    "Id": "ba4445cc-e6f2-4dcf-ba7c-59a0a0bb9908",
                                    "Type": "Layout",
                                    "HintText": "Fakturafreigabe (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Fakturafreigabe",
                                        "OriginalCaption": "Fakturafreigabe",
                                        "Id": "ba4445cc-e6f2-4dcf-ba7c-59a0a0bb9908_LayoutControlGroup_5726700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Tätigkeiten",
                                "OriginalCaption": "Tätigkeiten",
                                "Id": "90560",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Tätigkeiten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Tätigkeiten (Soloplan-Vorgabe)",
                                    "Id": "710816ea-62cb-4493-8581-9705c182b1a0",
                                    "Type": "Layout",
                                    "HintText": "Tätigkeiten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Tätigkeiten",
                                        "OriginalCaption": "Tätigkeiten",
                                        "Id": "710816ea-62cb-4493-8581-9705c182b1a0_LayoutControlGroup_5001100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Terminarten",
                                "OriginalCaption": "Terminarten",
                                "Id": "60213",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Terminarten (Soloplan - Vorgabe)",
                                    "OriginalCaption": "Terminarten (Soloplan - Vorgabe)",
                                    "Id": "629a24d2-e12c-43db-ac89-c4d3702103d4",
                                    "Type": "Layout",
                                    "HintText": "Terminarten (Soloplan - Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Terminart",
                                        "OriginalCaption": "Terminart",
                                        "Id": "629a24d2-e12c-43db-ac89-c4d3702103d4_LayoutControlGroup_5010700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "629a24d2-e12c-43db-ac89-c4d3702103d4_LayoutControlGroup_5010700_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Status",
                                "OriginalCaption": "Status",
                                "Id": "60809",
                                "Type": "Dialog",
                                "HintText": "Legt mögliche Statuswerte für Sendungen, Angebote odert Aufträge fest.",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Bearbeitungsstatus (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Bearbeitungsstatus (Soloplan-Vorgabe)",
                                    "Id": "eb74f18e-65b9-4156-8594-c1cd4c887529",
                                    "Type": "Layout",
                                    "HintText": "Bearbeitungsstatus (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Status",
                                        "OriginalCaption": "Status",
                                        "Id": "eb74f18e-65b9-4156-8594-c1cd4c887529_LayoutControlGroup_5014800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Statusgründe",
                                "OriginalCaption": "Statusgründe",
                                "Id": "60817",
                                "Type": "Dialog",
                                "HintText": "Bearbeiten von Statusgründen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Statusgrund (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Statusgrund (Soloplan-Vorgabe)",
                                    "Id": "d5fe0fec-96bc-4653-96fb-6e652d9fc035",
                                    "Type": "Layout",
                                    "HintText": "Statusgrund (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Statusgründe",
                                        "OriginalCaption": "Statusgründe",
                                        "Id": "d5fe0fec-96bc-4653-96fb-6e652d9fc035_LayoutControlGroup_5018300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Nachschlagefelder",
                                "OriginalCaption": "Nachschlagefelder",
                                "Id": "62006",
                                "Type": "Dialog",
                                "HintText": "Nachschlagefelder",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Nachschlagewerte (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Nachschlagewerte (Soloplan-Vorgabe)",
                                    "Id": "65ab155f-f2ac-4cd5-a661-ccfc86569c62",
                                    "Type": "Layout",
                                    "HintText": "Nachschlagewerte (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Nachschlagefelder",
                                        "OriginalCaption": "Nachschlagefelder",
                                        "Id": "65ab155f-f2ac-4cd5-a661-ccfc86569c62_LayoutControlGroup_5029400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Genehmigungen",
                                "OriginalCaption": "Genehmigungen",
                                "Id": "60212",
                                "Type": "Dialog",
                                "HintText": "Genehmigungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Genehmigungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Genehmigungen (Soloplan-Vorgabe)",
                                    "Id": "7aa0bc44-536f-494d-a62c-289f9c3cd84f",
                                    "Type": "Layout",
                                    "HintText": "Genehmigungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Genehmigungen",
                                        "OriginalCaption": "Genehmigungen",
                                        "Id": "7aa0bc44-536f-494d-a62c-289f9c3cd84f_LayoutControlGroup_5011100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Fahrzeuge",
                                            "OriginalCaption": "Fahrzeuge",
                                            "Id": "7aa0bc44-536f-494d-a62c-289f9c3cd84f_LayoutControlGroup_5011100_{128B01B8-CC9D-44c2-9C7E-6C499D1B3609}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Geschäftspartner",
                                            "OriginalCaption": "Geschäftspartner",
                                            "Id": "7aa0bc44-536f-494d-a62c-289f9c3cd84f_LayoutControlGroup_5011100_{C8C11D00-D2A7-4A5C-9E2F-D6B0162C2318}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "7aa0bc44-536f-494d-a62c-289f9c3cd84f_LayoutControlGroup_5011100_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Genehmigungstypen",
                                "OriginalCaption": "Genehmigungstypen",
                                "Id": "62021",
                                "Type": "Dialog",
                                "HintText": "Genehmigungstypen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Genehmigungstyp (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Genehmigungstyp (Soloplan-Vorgabe)",
                                    "Id": "f9ccf646-10c2-46ca-bf57-b9558f994de8",
                                    "Type": "Layout",
                                    "HintText": "Genehmigungstyp (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Genehmigungstyp",
                                        "OriginalCaption": "Genehmigungstyp",
                                        "Id": "f9ccf646-10c2-46ca-bf57-b9558f994de8_LayoutControlGroup_5054100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Intervalle",
                                "OriginalCaption": "Intervalle",
                                "Id": "60802",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Intervalle (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Intervalle (Soloplan-Vorgabe)",
                                    "Id": "3c5bdd77-5fec-4a5c-b575-a82ee52e10f4",
                                    "Type": "Layout",
                                    "HintText": "Intervalle (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Intervalle",
                                        "OriginalCaption": "Intervalle",
                                        "Id": "3c5bdd77-5fec-4a5c-b575-a82ee52e10f4_LayoutControlGroup_5020700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Feiertage",
                                            "OriginalCaption": "Feiertage",
                                            "Id": "3c5bdd77-5fec-4a5c-b575-a82ee52e10f4_LayoutControlGroup_5020700_5020732",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Texte",
                                "OriginalCaption": "Texte",
                                "Id": "60801",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Texte (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Texte (Soloplan-Vorgabe)",
                                    "Id": "d1b92997-9658-47c2-91bf-4e77168cc685",
                                    "Type": "Layout",
                                    "HintText": "Texte (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Texte",
                                        "OriginalCaption": "Texte",
                                        "Id": "d1b92997-9658-47c2-91bf-4e77168cc685_LayoutControlGroup_5010800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Bänderauslastung",
                                "OriginalCaption": "Bänderauslastung",
                                "Id": "62022",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "CapacityBand (Soloplan-Vorgabe)",
                                    "OriginalCaption": "CapacityBand (Soloplan-Vorgabe)",
                                    "Id": "c73a8138-98ab-4a68-a72e-1570ba18acc4",
                                    "Type": "Layout",
                                    "HintText": "CapacityBand (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Bänderauslastung",
                                        "OriginalCaption": "Bänderauslastung",
                                        "Id": "c73a8138-98ab-4a68-a72e-1570ba18acc4_LayoutControlGroup_5059200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Ausstattungen",
                                "OriginalCaption": "Ausstattungen",
                                "Id": "60207",
                                "Type": "Dialog",
                                "HintText": "Ausstattungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Fahrzeugausstattungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Fahrzeugausstattungen (Soloplan-Vorgabe)",
                                    "Id": "621e5a96-089f-495e-a5f6-844e6cb00cd1",
                                    "Type": "Layout",
                                    "HintText": "Fahrzeugausstattungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Ausstattungen",
                                        "OriginalCaption": "Ausstattungen",
                                        "Id": "621e5a96-089f-495e-a5f6-844e6cb00cd1_LayoutControlGroup_5010100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Externe Referenzen",
                                            "OriginalCaption": "Externe Referenzen",
                                            "Id": "621e5a96-089f-495e-a5f6-844e6cb00cd1_LayoutControlGroup_5010100_{71A30C20-80EF-46D1-8E3C-FF4C918E0C4D}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "621e5a96-089f-495e-a5f6-844e6cb00cd1_LayoutControlGroup_5010100_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "E-Mail-Vorlagen",
                                "OriginalCaption": "E-Mail-Vorlagen",
                                "Id": "63206",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "E-Mailvorlage (Soloplan-Vorgabe)",
                                    "OriginalCaption": "E-Mailvorlage (Soloplan-Vorgabe)",
                                    "Id": "4a674305-1393-4ad4-82c3-b8796d9f5cac",
                                    "Type": "Layout",
                                    "HintText": "E-Mailvorlage (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "E-Mail-Vorlagen",
                                        "OriginalCaption": "E-Mail-Vorlagen",
                                        "Id": "4a674305-1393-4ad4-82c3-b8796d9f5cac_LayoutControlGroup_5051500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Mailinhalt",
                                            "OriginalCaption": "Mailinhalt",
                                            "Id": "4a674305-1393-4ad4-82c3-b8796d9f5cac_LayoutControlGroup_5051500_{FC273894-A76A-4EB4-BB0B-D93A39E102DA}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Berichte",
                                            "OriginalCaption": "Berichte",
                                            "Id": "4a674305-1393-4ad4-82c3-b8796d9f5cac_LayoutControlGroup_5051500_{E54E348A-CE44-4F71-AF86-5CD3ECA42793}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Vertriebsweg",
                                "OriginalCaption": "Vertriebsweg",
                                "Id": "64007",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Vertriebsweg (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Vertriebsweg (Soloplan-Vorgabe)",
                                    "Id": "a9ee815e-102a-40c7-990e-8e49def7c9db",
                                    "Type": "Layout",
                                    "HintText": "Vertriebsweg (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Vertriebsweg",
                                        "OriginalCaption": "Vertriebsweg",
                                        "Id": "a9ee815e-102a-40c7-990e-8e49def7c9db_LayoutControlGroup_5068800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "a9ee815e-102a-40c7-990e-8e49def7c9db_LayoutControlGroup_5068800_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Zoll",
                        "OriginalCaption": "Zoll",
                        "Id": "64100",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Zollabgabenarten",
                            "OriginalCaption": "Zollabgabenarten",
                            "Id": "60412",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Zoll Abgabenarten (Soloplan-Vorgabe)",
                                "OriginalCaption": "Zoll Abgabenarten (Soloplan-Vorgabe)",
                                "Id": "e52c089e-7839-4b86-8587-100e26bcf9cf",
                                "Type": "Layout",
                                "HintText": "Zoll Abgabenarten (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Zollabgabenarten",
                                    "OriginalCaption": "Zollabgabenarten",
                                    "Id": "e52c089e-7839-4b86-8587-100e26bcf9cf_LayoutControlGroup_5070700",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Bürgschaften",
                                "OriginalCaption": "Bürgschaften",
                                "Id": "64102",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Bürgschaften (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Bürgschaften (Soloplan-Vorgabe)",
                                    "Id": "a5c703cf-7aa3-4010-b57c-cee20b07936e",
                                    "Type": "Layout",
                                    "HintText": "Bürgschaften (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Bürgschaften",
                                        "OriginalCaption": "Bürgschaften",
                                        "Id": "a5c703cf-7aa3-4010-b57c-cee20b07936e_LayoutControlGroup_5728000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Zollaufschubkonten",
                                "OriginalCaption": "Zollaufschubkonten",
                                "Id": "64101",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Zollaufschubkonten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Zollaufschubkonten (Soloplan-Vorgabe)",
                                    "Id": "af74e70e-105c-40f0-92aa-515bb2cab5db",
                                    "Type": "Layout",
                                    "HintText": "Zollaufschubkonten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Zollaufschubkonten",
                                        "OriginalCaption": "Zollaufschubkonten",
                                        "Id": "af74e70e-105c-40f0-92aa-515bb2cab5db_LayoutControlGroup_5727900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Zoll-Codelisten",
                                "OriginalCaption": "Zoll-Codelisten",
                                "Id": "64104",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Zoll Codelisten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Zoll Codelisten (Soloplan-Vorgabe)",
                                    "Id": "f7a381a3-ab34-4e3b-b313-eecaacdd6a91",
                                    "Type": "Layout",
                                    "HintText": "Zoll Codelisten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Zoll Codelisten",
                                        "OriginalCaption": "Zoll Codelisten",
                                        "Id": "f7a381a3-ab34-4e3b-b313-eecaacdd6a91_LayoutControlGroup_5730100",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "f7a381a3-ab34-4e3b-b313-eecaacdd6a91_LayoutControlGroup_5730100_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Art des Export/Import",
                                "OriginalCaption": "Art des Export/Import",
                                "Id": "62026",
                                "Type": "Dialog",
                                "HintText": "Zoll Deklarationsarten",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Zoll Deklarationsarten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Zoll Deklarationsarten (Soloplan-Vorgabe)",
                                    "Id": "63a938de-91d7-4805-980e-f4c54a3cf0c8",
                                    "Type": "Layout",
                                    "HintText": "Zoll Deklarationsarten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Art des Export/Import",
                                        "OriginalCaption": "Art des Export/Import",
                                        "Id": "63a938de-91d7-4805-980e-f4c54a3cf0c8_LayoutControlGroup_5069700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Lager",
                        "OriginalCaption": "Lager",
                        "Id": "110000",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Lager",
                            "OriginalCaption": "Lager",
                            "Id": "61001",
                            "Type": "Dialog",
                            "HintText": "Lager",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Warehouse (Soloplan-Vorgabe)",
                                "OriginalCaption": "Warehouse (Soloplan-Vorgabe)",
                                "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab",
                                "Type": "Layout",
                                "HintText": "Warehouse (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Lager",
                                    "OriginalCaption": "Lager",
                                    "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Lagergeld",
                                        "OriginalCaption": "Lagergeld",
                                        "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500_{FF353E82-F9F0-4B31-ABEA-0F3F7B64974D}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Lagerbereiche",
                                        "OriginalCaption": "Lagerbereiche",
                                        "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500_{ABB9E2E7-9D2D-4F68-AD29-8EF556FF70BF}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Gefahrgutwerte",
                                        "OriginalCaption": "Gefahrgutwerte",
                                        "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500_{BBF27548-78FD-430A-B0BE-9890225DAA41}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Lagerplätze",
                                "OriginalCaption": "Lagerplätze",
                                "Id": "61002",
                                "Type": "Dialog",
                                "HintText": "Lagerplätze",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "StorageArea (Soloplan-Vorgabe)",
                                    "OriginalCaption": "StorageArea (Soloplan-Vorgabe)",
                                    "Id": "6c59d6f1-a6ab-4109-9ba1-75d3d21d5770",
                                    "Type": "Layout",
                                    "HintText": "StorageArea (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Allgemein",
                                        "OriginalCaption": "Allgemein",
                                        "Id": "6c59d6f1-a6ab-4109-9ba1-75d3d21d5770_LayoutControlGroup_5000400_{12441FE2-F4AF-42E7-A07D-8A7D40FBD2ED}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Lagerplatzreservierungen",
                                "OriginalCaption": "Lagerplatzreservierungen",
                                "Id": "61003",
                                "Type": "Dialog",
                                "HintText": "Lagerplätze",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Lagerplatzreservierungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Lagerplatzreservierungen (Soloplan-Vorgabe)",
                                    "Id": "73c29131-6880-443f-9483-72d94dc7f3d5",
                                    "Type": "Layout",
                                    "HintText": "Lagerplatzreservierungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Lagerplatzreservierung",
                                        "OriginalCaption": "Lagerplatzreservierung",
                                        "Id": "73c29131-6880-443f-9483-72d94dc7f3d5_LayoutControlGroup_5001800_{EAC6B25F-8CEE-4938-8B42-0A2FB28DB3B9}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Lagerplätze",
                                            "OriginalCaption": "Lagerplätze",
                                            "Id": "73c29131-6880-443f-9483-72d94dc7f3d5_LayoutControlGroup_5001800_{F54516BF-EC8E-449C-992A-10D196FE566D}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Abrechnung",
                                            "OriginalCaption": "Abrechnung",
                                            "Id": "73c29131-6880-443f-9483-72d94dc7f3d5_LayoutControlGroup_5001800_{AB63F377-F9C6-4C78-9A5E-FC47F9CA3F55}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Artikelchargen",
                                "OriginalCaption": "Artikelchargen",
                                "Id": "110020",
                                "Type": "Dialog",
                                "HintText": "Artikelchargen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Artikelchargen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Artikelchargen (Soloplan-Vorgabe)",
                                    "Id": "6f4a2199-b339-43fe-9d76-343aad522f9e",
                                    "Type": "Layout",
                                    "HintText": "Artikelchargen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Artikelchargen",
                                        "OriginalCaption": "Artikelchargen",
                                        "Id": "6f4a2199-b339-43fe-9d76-343aad522f9e_LayoutControlGroup_5013000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Lagerplatztypen",
                                "OriginalCaption": "Lagerplatztypen",
                                "Id": "123003",
                                "Type": "Dialog",
                                "HintText": "Lagerplatztypen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Lagerplatztypen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Lagerplatztypen (Soloplan-Vorgabe)",
                                    "Id": "d8f6fd06-2c4c-49f5-baa4-4314219c4c6f",
                                    "Type": "Layout",
                                    "HintText": "Lagerplatztypen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Lagerplatztypen",
                                        "OriginalCaption": "Lagerplatztypen",
                                        "Id": "d8f6fd06-2c4c-49f5-baa4-4314219c4c6f_LayoutControlGroup_5068000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Lagerplätze",
                                            "OriginalCaption": "Lagerplätze",
                                            "Id": "d8f6fd06-2c4c-49f5-baa4-4314219c4c6f_LayoutControlGroup_5068000_5068006",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Urlaubsplanung",
                        "OriginalCaption": "Urlaubsplanung",
                        "Id": "10600",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Länder",
                        "OriginalCaption": "Länder",
                        "Id": "10420",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Länder",
                            "OriginalCaption": "Länder",
                            "Id": "10421",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Länder (Soloplan-Vorgabe)",
                                "OriginalCaption": "Länder (Soloplan-Vorgabe)",
                                "Id": "958254f7-f512-4431-a6ea-ebd683663065",
                                "Type": "Layout",
                                "HintText": "Länder (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Länder",
                                    "OriginalCaption": "Länder",
                                    "Id": "958254f7-f512-4431-a6ea-ebd683663065_LayoutControlGroup_70000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "FiBu",
                                        "OriginalCaption": "FiBu",
                                        "Id": "958254f7-f512-4431-a6ea-ebd683663065_LayoutControlGroup_70000_{5EF79D79-4B17-4c48-8CD3-1B164ED55089}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Währungen",
                                "OriginalCaption": "Währungen",
                                "Id": "10422",
                                "Type": "Dialog",
                                "HintText": "Währungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Währungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Währungen (Soloplan-Vorgabe)",
                                    "Id": "e42753a3-21c8-4210-90ce-05219641ff8e",
                                    "Type": "Layout",
                                    "HintText": "Währungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Währungen",
                                        "OriginalCaption": "Währungen",
                                        "Id": "e42753a3-21c8-4210-90ce-05219641ff8e_LayoutControlGroup_5000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "e42753a3-21c8-4210-90ce-05219641ff8e_LayoutControlGroup_5000_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Wechselkurse",
                                "OriginalCaption": "Wechselkurse",
                                "Id": "10423",
                                "Type": "Dialog",
                                "HintText": "Dialog zum Bearbeiten von Wechselkursen.",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Wechselkurse (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Wechselkurse (Soloplan-Vorgabe)",
                                    "Id": "9a80664d-807d-4281-8058-f41728f1dec5",
                                    "Type": "Layout",
                                    "HintText": "Wechselkurse (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Wechselkurse",
                                        "OriginalCaption": "Wechselkurse",
                                        "Id": "9a80664d-807d-4281-8058-f41728f1dec5_LayoutControlGroup_5023300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Wechselkursmargen",
                                            "OriginalCaption": "Wechselkursmargen",
                                            "Id": "9a80664d-807d-4281-8058-f41728f1dec5_LayoutControlGroup_5023300_5023308",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Feiertagsgruppen",
                                "OriginalCaption": "Feiertagsgruppen",
                                "Id": "10803",
                                "Type": "Dialog",
                                "HintText": "Feiertagsgruppen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Feiertagsgruppen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Feiertagsgruppen (Soloplan-Vorgabe)",
                                    "Id": "73dd5b8e-90be-4c1a-92b7-c82bf0da0530",
                                    "Type": "Layout",
                                    "HintText": "Feiertagsgruppen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Feiertagsgruppen",
                                        "OriginalCaption": "Feiertagsgruppen",
                                        "Id": "73dd5b8e-90be-4c1a-92b7-c82bf0da0530_LayoutControlGroup_5035700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Spesen",
                        "OriginalCaption": "Spesen",
                        "Id": "62019",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Spesensätze",
                            "OriginalCaption": "Spesensätze",
                            "Id": "62020",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Spesen (Soloplan-Vorgabe)",
                                "OriginalCaption": "Spesen (Soloplan-Vorgabe)",
                                "Id": "0214135d-f05e-42e5-b8b7-1d1231c07c64",
                                "Type": "Layout",
                                "HintText": "Spesen (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Spesensätze",
                                    "OriginalCaption": "Spesensätze",
                                    "Id": "0214135d-f05e-42e5-b8b7-1d1231c07c64_LayoutControlGroup_5047600",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Spesen Belegarten",
                                "OriginalCaption": "Spesen Belegarten",
                                "Id": "62025",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "ExpenseDocumentType (Soloplan-Vorgabe)",
                                    "OriginalCaption": "ExpenseDocumentType (Soloplan-Vorgabe)",
                                    "Id": "ef7006d0-d8ea-4d44-ac19-da603b1ade68",
                                    "Type": "Layout",
                                    "HintText": "ExpenseDocumentType (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Spesen Belegarten",
                                        "OriginalCaption": "Spesen Belegarten",
                                        "Id": "ef7006d0-d8ea-4d44-ac19-da603b1ade68_LayoutControlGroup_5048200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "DMS",
                        "OriginalCaption": "DMS",
                        "Id": "63207",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Schlagwörter",
                            "OriginalCaption": "Schlagwörter",
                            "Id": "64001",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Schlagwörter (Soloplan-Vorgabe)",
                                "OriginalCaption": "Schlagwörter (Soloplan-Vorgabe)",
                                "Id": "5339f8c2-4f4f-4963-b061-6463cf0f71ba",
                                "Type": "Layout",
                                "HintText": "Schlagwörter (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Schlagwort",
                                    "OriginalCaption": "Schlagwort",
                                    "Id": "5339f8c2-4f4f-4963-b061-6463cf0f71ba_LayoutControlGroup_5063300",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Dateiendung",
                                "OriginalCaption": "Dateiendung",
                                "Id": "64002",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Dateiendung (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Dateiendung (Soloplan-Vorgabe)",
                                    "Id": "569334f4-7b17-4b76-baf6-babb01fe95ce",
                                    "Type": "Layout",
                                    "HintText": "Dateiendung (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Dateiendung",
                                        "OriginalCaption": "Dateiendung",
                                        "Id": "569334f4-7b17-4b76-baf6-babb01fe95ce_LayoutControlGroup_5063500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Physischer Speicher",
                                "OriginalCaption": "Physischer Speicher",
                                "Id": "64003",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Physischer Speicher (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Physischer Speicher (Soloplan-Vorgabe)",
                                    "Id": "c5131f05-eb35-4922-9815-f089c528a58c",
                                    "Type": "Layout",
                                    "HintText": "Physischer Speicher (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Physischer Speicher",
                                        "OriginalCaption": "Physischer Speicher",
                                        "Id": "c5131f05-eb35-4922-9815-f089c528a58c_LayoutControlGroup_5063600",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Archiv",
                                "OriginalCaption": "Archiv",
                                "Id": "64004",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "DokumentenArchiv (Soloplan-Vorgabe)",
                                    "OriginalCaption": "DokumentenArchiv (Soloplan-Vorgabe)",
                                    "Id": "bea7a430-7f5b-42af-bd1c-ffe50bb1b443",
                                    "Type": "Layout",
                                    "HintText": "DokumentenArchiv (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Archiv",
                                        "OriginalCaption": "Archiv",
                                        "Id": "bea7a430-7f5b-42af-bd1c-ffe50bb1b443_LayoutControlGroup_5063800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Dokumentenart",
                                "OriginalCaption": "Dokumentenart",
                                "Id": "64005",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Dokumentenart (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Dokumentenart (Soloplan-Vorgabe)",
                                    "Id": "859c4a46-134e-4670-be88-a3c79a8f20a9",
                                    "Type": "Layout",
                                    "HintText": "Dokumentenart (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Dokumentenart",
                                        "OriginalCaption": "Dokumentenart",
                                        "Id": "859c4a46-134e-4670-be88-a3c79a8f20a9_LayoutControlGroup_5063400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Vorbelegung",
                                            "OriginalCaption": "Vorbelegung",
                                            "Id": "859c4a46-134e-4670-be88-a3c79a8f20a9_LayoutControlGroup_5063400_{8FA0D15A-C440-4D58-80CB-E8664F98F23E}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Berechtigungsschlüssel",
                                "OriginalCaption": "Berechtigungsschlüssel",
                                "Id": "64006",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Berechtigungsschlüssel (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Berechtigungsschlüssel (Soloplan-Vorgabe)",
                                    "Id": "dfb2d071-62d5-44ca-bd1a-4bc5fecb9e77",
                                    "Type": "Layout",
                                    "HintText": "Berechtigungsschlüssel (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Berechtigungsschlüssel",
                                        "OriginalCaption": "Berechtigungsschlüssel",
                                        "Id": "dfb2d071-62d5-44ca-bd1a-4bc5fecb9e77_LayoutControlGroup_5063700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Ordnerregister",
                                "OriginalCaption": "Ordnerregister",
                                "Id": "64009",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Ordnerregister (Soloplan Vorgabe)",
                                    "OriginalCaption": "Ordnerregister (Soloplan Vorgabe)",
                                    "Id": "1fd945f1-1d6c-428a-874a-99d147fc2e6d",
                                    "Type": "Layout",
                                    "HintText": "Ordnerregister (Soloplan Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Ordnerregister",
                                        "OriginalCaption": "Ordnerregister",
                                        "Id": "1fd945f1-1d6c-428a-874a-99d147fc2e6d_LayoutControlGroup_5070800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Stempel",
                                "OriginalCaption": "Stempel",
                                "Id": "64012",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Stempel (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Stempel (Soloplan-Vorgabe)",
                                    "Id": "99baff52-eba4-465c-adb3-e7ea0738cc65",
                                    "Type": "Layout",
                                    "HintText": "Stempel (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Stempel",
                                        "OriginalCaption": "Stempel",
                                        "Id": "99baff52-eba4-465c-adb3-e7ea0738cc65_LayoutControlGroup_5705200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Entfernungsermittlung",
                        "OriginalCaption": "Entfernungsermittlung",
                        "Id": "60820",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Streckenänderungen",
                            "OriginalCaption": "Streckenänderungen",
                            "Id": "64010",
                            "Type": "Dialog",
                            "HintText": "Streckenänderungen",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Streckenänderungen (Soloplan-Vorgabe)",
                                "OriginalCaption": "Streckenänderungen (Soloplan-Vorgabe)",
                                "Id": "8b50fe6c-3121-47b6-bbcb-21d4464e5219",
                                "Type": "Layout",
                                "HintText": "Streckenänderungen (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Streckenänderungen",
                                    "OriginalCaption": "Streckenänderungen",
                                    "Id": "8b50fe6c-3121-47b6-bbcb-21d4464e5219_LayoutControlGroup_5069200",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Kartendarstellung",
                                "OriginalCaption": "Kartendarstellung",
                                "Id": "64015",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Mautregeln",
                                "OriginalCaption": "Mautregeln",
                                "Id": "60824",
                                "Type": "Dialog",
                                "HintText": "Mautregeln bearbeiten",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Eigene Entfernungen",
                                "OriginalCaption": "Eigene Entfernungen",
                                "Id": "60821",
                                "Type": "Dialog",
                                "HintText": "Eigene Entfernungen",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Eigene Entfernungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Eigene Entfernungen (Soloplan-Vorgabe)",
                                    "Id": "a1ed2b38-1a2c-4f4a-bee6-716a09edec82",
                                    "Type": "Layout",
                                    "HintText": "Eigene Entfernungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Adressen",
                                        "OriginalCaption": "Adressen",
                                        "Id": "a1ed2b38-1a2c-4f4a-bee6-716a09edec82_LayoutControlGroup_5034500_{9FB86A51-CD77-4674-AC59-7B17FF6D1EF4}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Entfernungen",
                                            "OriginalCaption": "Entfernungen",
                                            "Id": "a1ed2b38-1a2c-4f4a-bee6-716a09edec82_LayoutControlGroup_5034500_{35434E5D-158B-4cba-B7C1-8565D49E46DE}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Via-Stationen",
                                            "OriginalCaption": "Via-Stationen",
                                            "Id": "a1ed2b38-1a2c-4f4a-bee6-716a09edec82_LayoutControlGroup_5034500_{5E058259-0917-4B95-BA8F-54BBBF72D3A7}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "a1ed2b38-1a2c-4f4a-bee6-716a09edec82_LayoutControlGroup_5034500_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Korrekturadressen",
                                "OriginalCaption": "Korrekturadressen",
                                "Id": "60823",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Korrekturadressen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Korrekturadressen (Soloplan-Vorgabe)",
                                    "Id": "e0ca24b7-52e3-40f0-8599-4c86b075d177",
                                    "Type": "Layout",
                                    "HintText": "Korrekturadressen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Korrekturadressen",
                                        "OriginalCaption": "Korrekturadressen",
                                        "Id": "e0ca24b7-52e3-40f0-8599-4c86b075d177_LayoutControlGroup_5030400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Transportführungen",
                                "OriginalCaption": "Transportführungen",
                                "Id": "60822",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Transportführung (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Transportführung (Soloplan-Vorgabe)",
                                    "Id": "f4abecf8-0346-4c2f-aa1e-9f1302486b20",
                                    "Type": "Layout",
                                    "HintText": "Transportführung (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Transportführungen",
                                        "OriginalCaption": "Transportführungen",
                                        "Id": "f4abecf8-0346-4c2f-aa1e-9f1302486b20_LayoutControlGroup_5029800",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Bedingungen",
                                            "OriginalCaption": "Bedingungen",
                                            "Id": "f4abecf8-0346-4c2f-aa1e-9f1302486b20_LayoutControlGroup_5029800_{AADD8170-FB15-4821-B442-E8486EB43959}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Geo-Fences",
                                "OriginalCaption": "Geo-Fences",
                                "Id": "60825",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Geofencing (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Geofencing (Soloplan-Vorgabe)",
                                    "Id": "6a9e1c54-5107-4ddf-8ef5-eb0c94ca582e",
                                    "Type": "Layout",
                                    "HintText": "Geofencing (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Geo-Fences",
                                        "OriginalCaption": "Geo-Fences",
                                        "Id": "6a9e1c54-5107-4ddf-8ef5-eb0c94ca582e_LayoutControlGroup_5069500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Projektplaner",
                        "OriginalCaption": "Projektplaner",
                        "Id": "63000",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Kennziffer",
                            "OriginalCaption": "Kennziffer",
                            "Id": "63001",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Kennziffern (Soloplan-Vorgabe)",
                                "OriginalCaption": "Kennziffern (Soloplan-Vorgabe)",
                                "Id": "5527ccc3-916a-415a-8cc2-370612e964a2",
                                "Type": "Layout",
                                "HintText": "Kennziffern (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Tätigkeit",
                                    "OriginalCaption": "Tätigkeit",
                                    "Id": "5527ccc3-916a-415a-8cc2-370612e964a2_LayoutControlGroup_5708100",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Projekte",
                                "OriginalCaption": "Projekte",
                                "Id": "63002",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Projekt (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Projekt (Soloplan-Vorgabe)",
                                    "Id": "3fad35c8-f2a6-49c7-bc4d-236ce2d226b2",
                                    "Type": "Layout",
                                    "HintText": "Projekt (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Projekt",
                                        "OriginalCaption": "Projekt",
                                        "Id": "3fad35c8-f2a6-49c7-bc4d-236ce2d226b2_LayoutControlGroup_5052000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Kunden",
                                            "OriginalCaption": "Kunden",
                                            "Id": "3fad35c8-f2a6-49c7-bc4d-236ce2d226b2_LayoutControlGroup_5052000_5052014",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Angebote",
                                            "OriginalCaption": "Angebote",
                                            "Id": "3fad35c8-f2a6-49c7-bc4d-236ce2d226b2_LayoutControlGroup_5052000_5052015",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Aufgabentyp",
                                "OriginalCaption": "Aufgabentyp",
                                "Id": "63004",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Aufgabentyp (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Aufgabentyp (Soloplan-Vorgabe)",
                                    "Id": "abef942d-1af4-446f-84ad-81fe60a7a146",
                                    "Type": "Layout",
                                    "HintText": "Aufgabentyp (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Aufgabentyp",
                                        "OriginalCaption": "Aufgabentyp",
                                        "Id": "abef942d-1af4-446f-84ad-81fe60a7a146_LayoutControlGroup_5050700",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Beschreibung",
                                            "OriginalCaption": "Beschreibung",
                                            "Id": "abef942d-1af4-446f-84ad-81fe60a7a146_LayoutControlGroup_5050700_5050706",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Zeiterfassungen",
                                "OriginalCaption": "Zeiterfassungen",
                                "Id": "140001",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Aufgaben",
                                "OriginalCaption": "Aufgaben",
                                "Id": "140002",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Aufgaben (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Aufgaben (Soloplan-Vorgabe)",
                                    "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3",
                                    "Type": "Layout",
                                    "HintText": "Aufgaben (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Aufgabe",
                                        "OriginalCaption": "Aufgabe",
                                        "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3_LayoutControlGroup_5052200",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Beschreibung",
                                            "OriginalCaption": "Beschreibung",
                                            "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3_LayoutControlGroup_5052200_5052209",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Interne Informationen",
                                            "OriginalCaption": "Interne Informationen",
                                            "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3_LayoutControlGroup_5052200_5052211",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Lösung",
                                            "OriginalCaption": "Lösung",
                                            "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3_LayoutControlGroup_5052200_5052213",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Testfälle",
                                            "OriginalCaption": "Testfälle",
                                            "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3_LayoutControlGroup_5052200_5052215",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "QM-Feedback",
                                            "OriginalCaption": "QM-Feedback",
                                            "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3_LayoutControlGroup_5052200_5052221",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Planungseinheiten",
                                            "OriginalCaption": "Planungseinheiten",
                                            "Id": "84ae97f3-0bec-4e12-af09-0ec4a4ec52b3_LayoutControlGroup_5052200_5052248",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Planungseinheiten",
                                "OriginalCaption": "Planungseinheiten",
                                "Id": "140003",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Planungseinheiten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Planungseinheiten (Soloplan-Vorgabe)",
                                    "Id": "8c1c09b5-e717-4238-ae37-cabf0922527c",
                                    "Type": "Layout",
                                    "HintText": "Planungseinheiten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Planungseinheit",
                                        "OriginalCaption": "Planungseinheit",
                                        "Id": "8c1c09b5-e717-4238-ae37-cabf0922527c_LayoutControlGroup_5052300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    }
                ]
            },
            {
                "Caption": "Aufträge",
                "OriginalCaption": "Aufträge",
                "Id": "20000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Angebote",
                    "OriginalCaption": "Angebote",
                    "Id": "20800",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Angebotserfassung (individuell)",
                        "OriginalCaption": "Angebotserfassung (individuell)",
                        "Id": "30002",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 2,
                        "Children": null
                    },
                        {
                            "Caption": "Vergleichskalkulation",
                            "OriginalCaption": "Vergleichskalkulation",
                            "Id": "30006",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": null
                        }
                    ]
                },
                    {
                        "Caption": "Aufträge",
                        "OriginalCaption": "Aufträge",
                        "Id": "20100",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Zyklische Vorlagen",
                            "OriginalCaption": "Zyklische Vorlagen",
                            "Id": "20107",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Zyklische Vorlagen (Soloplan-Vorgabe)",
                                "OriginalCaption": "Zyklische Vorlagen (Soloplan-Vorgabe)",
                                "Id": "bf5da382-b883-4880-bd32-fc5d07b4db42",
                                "Type": "Layout",
                                "HintText": "Zyklische Vorlagen (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Zyklische Vorlagen",
                                    "OriginalCaption": "Zyklische Vorlagen",
                                    "Id": "bf5da382-b883-4880-bd32-fc5d07b4db42_LayoutControlGroup_5039900",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Aufträge",
                                        "OriginalCaption": "Aufträge",
                                        "Id": "bf5da382-b883-4880-bd32-fc5d07b4db42_LayoutControlGroup_5039900_{8A7B4414-1154-4095-AF95-A33C816EEA7F}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Auftragserfassung (individuell)",
                                "OriginalCaption": "Auftragserfassung (individuell)",
                                "Id": "20116",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Auftragsvorlagen (individuell)",
                                "OriginalCaption": "Auftragsvorlagen (individuell)",
                                "Id": "20117",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Rückerfassung",
                                "OriginalCaption": "Rückerfassung",
                                "Id": "20109",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Konfiguration",
                                "OriginalCaption": "Konfiguration",
                                "Id": "20115",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Zyklische Vorlagegruppen",
                                "OriginalCaption": "Zyklische Vorlagegruppen",
                                "Id": "62023",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Zyklische Vorlagengruppen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Zyklische Vorlagengruppen (Soloplan-Vorgabe)",
                                    "Id": "1a51b2d9-c90a-41bf-82aa-082ba75d3d19",
                                    "Type": "Layout",
                                    "HintText": "Zyklische Vorlagengruppen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Zyklische Vorlagegruppen",
                                        "OriginalCaption": "Zyklische Vorlagegruppen",
                                        "Id": "1a51b2d9-c90a-41bf-82aa-082ba75d3d19_LayoutControlGroup_5061500",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Zyklische Vorlagen",
                                            "OriginalCaption": "Zyklische Vorlagen",
                                            "Id": "1a51b2d9-c90a-41bf-82aa-082ba75d3d19_LayoutControlGroup_5061500_5061514",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Abrechnung",
                        "OriginalCaption": "Abrechnung",
                        "Id": "20200",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Fakturierung",
                        "OriginalCaption": "Fakturierung",
                        "Id": "20300",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Ausgabe",
                        "OriginalCaption": "Ausgabe",
                        "Id": "20400",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "KS",
                        "OriginalCaption": "KS",
                        "Id": "20600",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    }
                ]
            },
            {
                "Caption": "Luft- & Seefracht",
                "OriginalCaption": "Luft- & Seefracht",
                "Id": "150000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Luft- und Seefrachtangebote",
                    "OriginalCaption": "Luft- und Seefrachtangebote",
                    "Id": "150001",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Angebotserfassung (individuell)",
                        "OriginalCaption": "Angebotserfassung (individuell)",
                        "Id": "30002",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 2,
                        "Children": null
                    },
                        {
                            "Caption": "Vergleichskalkulation",
                            "OriginalCaption": "Vergleichskalkulation",
                            "Id": "30006",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": null
                        }
                    ]
                },
                    {
                        "Caption": "Luft- und Seefrachtaufträge",
                        "OriginalCaption": "Luft- und Seefrachtaufträge",
                        "Id": "150002",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Zyklische Vorlagen",
                            "OriginalCaption": "Zyklische Vorlagen",
                            "Id": "20107",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": null
                        },
                            {
                                "Caption": "Auftragserfassung (individuell)",
                                "OriginalCaption": "Auftragserfassung (individuell)",
                                "Id": "20116",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Auftragsvorlagen (individuell)",
                                "OriginalCaption": "Auftragsvorlagen (individuell)",
                                "Id": "20117",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Rückerfassung",
                                "OriginalCaption": "Rückerfassung",
                                "Id": "20109",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Konfiguration",
                                "OriginalCaption": "Konfiguration",
                                "Id": "20115",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Zyklische Vorlagegruppen",
                                "OriginalCaption": "Zyklische Vorlagegruppen",
                                "Id": "62023",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            }
                        ]
                    },
                    {
                        "Caption": "AWB-Bestandsverwaltung",
                        "OriginalCaption": "AWB-Bestandsverwaltung",
                        "Id": "150003",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "AWB Bestandsverwaltung (Soloplan-Vorgabe)",
                            "OriginalCaption": "AWB Bestandsverwaltung (Soloplan-Vorgabe)",
                            "Id": "d167c21b-94c7-4f51-a46e-49b0dcfd89d5",
                            "Type": "Layout",
                            "HintText": "AWB Bestandsverwaltung (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "AWB-Bestandsverwaltung",
                                "OriginalCaption": "AWB-Bestandsverwaltung",
                                "Id": "d167c21b-94c7-4f51-a46e-49b0dcfd89d5_LayoutControlGroup_5720700",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            },
                                {
                                    "Caption": "AWB-Tabelle",
                                    "OriginalCaption": "AWB-Tabelle",
                                    "Id": "d167c21b-94c7-4f51-a46e-49b0dcfd89d5_LayoutControlGroup_5720700_5720711",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                }
                            ]
                        }]
                    },
                    {
                        "Caption": "Handling-Codes",
                        "OriginalCaption": "Handling-Codes",
                        "Id": "150004",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Handling Codes (Soloplan-Vorgabe)",
                            "OriginalCaption": "Handling Codes (Soloplan-Vorgabe)",
                            "Id": "615512dc-11c0-41f9-81fd-c012420fc57a",
                            "Type": "Layout",
                            "HintText": "Handling Codes (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Handling-Codes",
                                "OriginalCaption": "Handling-Codes",
                                "Id": "615512dc-11c0-41f9-81fd-c012420fc57a_LayoutControlGroup_5720500",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "SCI-Status",
                        "OriginalCaption": "SCI-Status",
                        "Id": "150005",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "SCI-Status (Soloplan-Vorgabe)",
                            "OriginalCaption": "SCI-Status (Soloplan-Vorgabe)",
                            "Id": "832ece4f-7f2b-4bf5-9c5c-a19dd85cc0a7",
                            "Type": "Layout",
                            "HintText": "SCI-Status (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "SCI-Status",
                                "OriginalCaption": "SCI-Status",
                                "Id": "832ece4f-7f2b-4bf5-9c5c-a19dd85cc0a7_LayoutControlGroup_4900930",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "UN/IATA-Codes",
                        "OriginalCaption": "UN/IATA-Codes",
                        "Id": "150006",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "UN-Ortscodes (Soloplan-Vorgabe)",
                            "OriginalCaption": "UN-Ortscodes (Soloplan-Vorgabe)",
                            "Id": "b1292b9f-b983-4093-83b3-59b9f58d8711",
                            "Type": "Layout",
                            "HintText": "UN-Ortscodes (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "UN/IATA-Codes",
                                "OriginalCaption": "UN/IATA-Codes",
                                "Id": "b1292b9f-b983-4093-83b3-59b9f58d8711_LayoutControlGroup_5720600",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Screening-Methode",
                        "OriginalCaption": "Screening-Methode",
                        "Id": "150007",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Screening Methode (Soloplan-Vorgabe)",
                            "OriginalCaption": "Screening Methode (Soloplan-Vorgabe)",
                            "Id": "f463c836-0948-4a4f-ae47-1b02a1edfbfe",
                            "Type": "Layout",
                            "HintText": "Screening Methode (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Screening-Methode",
                                "OriginalCaption": "Screening-Methode",
                                "Id": "f463c836-0948-4a4f-ae47-1b02a1edfbfe_LayoutControlGroup_5720900",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Kostentyp",
                        "OriginalCaption": "Kostentyp",
                        "Id": "150009",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Kostentyp (Soloplan-Vorgabe)",
                            "OriginalCaption": "Kostentyp (Soloplan-Vorgabe)",
                            "Id": "8544248b-7b1e-4f5c-888c-d26f868d72ea",
                            "Type": "Layout",
                            "HintText": "Kostentyp (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Kostentyp",
                                "OriginalCaption": "Kostentyp",
                                "Id": "8544248b-7b1e-4f5c-888c-d26f868d72ea_LayoutControlGroup_5722100",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Sicherheitsstatus",
                        "OriginalCaption": "Sicherheitsstatus",
                        "Id": "150010",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Sicherheits-Status (Soloplan-Vorgabe)",
                            "OriginalCaption": "Sicherheits-Status (Soloplan-Vorgabe)",
                            "Id": "8d32b77c-5418-4d1c-befa-b35b2fa6ca6f",
                            "Type": "Layout",
                            "HintText": "Sicherheits-Status (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Sicherheitsstatus",
                                "OriginalCaption": "Sicherheitsstatus",
                                "Id": "8d32b77c-5418-4d1c-befa-b35b2fa6ca6f_LayoutControlGroup_5721600",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Frachtbedingungen",
                        "OriginalCaption": "Frachtbedingungen",
                        "Id": "150011",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Frachtbedingungen (Soloplan-Vorgabe)",
                            "OriginalCaption": "Frachtbedingungen (Soloplan-Vorgabe)",
                            "Id": "3850f5a8-586e-44e0-af6a-d2086a3e56da",
                            "Type": "Layout",
                            "HintText": "Frachtbedingungen (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Frachtbedingungen",
                                "OriginalCaption": "Frachtbedingungen",
                                "Id": "3850f5a8-586e-44e0-af6a-d2086a3e56da_LayoutControlGroup_5721700",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Frachtraten",
                        "OriginalCaption": "Frachtraten",
                        "Id": "150012",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Frachtraten (Soloplan-Vorgabe)",
                            "OriginalCaption": "Frachtraten (Soloplan-Vorgabe)",
                            "Id": "831c1240-b2db-4a7c-adc7-cf865ea13c7b",
                            "Type": "Layout",
                            "HintText": "Frachtraten (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Frachtraten",
                                "OriginalCaption": "Frachtraten",
                                "Id": "831c1240-b2db-4a7c-adc7-cf865ea13c7b_LayoutControlGroup_5722200",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "TACT Tarife",
                        "OriginalCaption": "TACT Tarife",
                        "Id": "150019",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "TactRates (Soloplan-Vorgabe)",
                            "OriginalCaption": "TactRates (Soloplan-Vorgabe)",
                            "Id": "ab05c7ea-54a7-4527-ab8a-0bad896b9dc3",
                            "Type": "Layout",
                            "HintText": "TactRates (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "TACT Tarife",
                                "OriginalCaption": "TACT Tarife",
                                "Id": "ab05c7ea-54a7-4527-ab8a-0bad896b9dc3_LayoutControlGroup_5730400",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Warenart",
                        "OriginalCaption": "Warenart",
                        "Id": "150016",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Warenart (Soloplan-Vorgabe)",
                            "OriginalCaption": "Warenart (Soloplan-Vorgabe)",
                            "Id": "85219676-7768-4348-989b-614415e50785",
                            "Type": "Layout",
                            "HintText": "Warenart (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Warenart",
                                "OriginalCaption": "Warenart",
                                "Id": "85219676-7768-4348-989b-614415e50785_LayoutControlGroup_5722000",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Containertyp",
                        "OriginalCaption": "Containertyp",
                        "Id": "150017",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Containertyp (Soloplan-Vorgabe)",
                            "OriginalCaption": "Containertyp (Soloplan-Vorgabe)",
                            "Id": "8cd19575-95c6-4571-8797-08a9ae78bb30",
                            "Type": "Layout",
                            "HintText": "Containertyp (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Containertyp",
                                "OriginalCaption": "Containertyp",
                                "Id": "8cd19575-95c6-4571-8797-08a9ae78bb30_LayoutControlGroup_5725700",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Containerdepots",
                        "OriginalCaption": "Containerdepots",
                        "Id": "150018",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Container Depots (Soloplan-Vorgabe)",
                            "OriginalCaption": "Container Depots (Soloplan-Vorgabe)",
                            "Id": "1d5ab868-ebc3-47dc-8ebd-21d64362fdbf",
                            "Type": "Layout",
                            "HintText": "Container Depots (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Containerdepots",
                                "OriginalCaption": "Containerdepots",
                                "Id": "1d5ab868-ebc3-47dc-8ebd-21d64362fdbf_LayoutControlGroup_5726300",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    }
                ]
            },
            {
                "Caption": "Transportplanung",
                "OriginalCaption": "Transportplanung",
                "Id": "70000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Entfernungsermittlung",
                    "OriginalCaption": "Entfernungsermittlung",
                    "Id": "70010",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Adressliste Entfernungen",
                        "OriginalCaption": "Adressliste Entfernungen",
                        "Id": "70321",
                        "Type": "Dialog",
                        "HintText": "Ermöglicht den Vergleich importierter Entfernung mit Routingentfernungen",
                        "Level": 2,
                        "Children": null
                    }]
                },
                    {
                        "Caption": "Eventmanagement",
                        "OriginalCaption": "Eventmanagement",
                        "Id": "70008",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Unbekannt",
                        "OriginalCaption": "Unbekannt",
                        "Id": "70009",
                        "Type": "Folder",
                        "HintText": null,
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Bestände/Bewegungen",
                        "OriginalCaption": "Bestände/Bewegungen",
                        "Id": "70315",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    }
                ]
            },
            {
                "Caption": "Lademittel",
                "OriginalCaption": "Lademittel",
                "Id": "40000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": null
            },
            {
                "Caption": "Verwaltung",
                "OriginalCaption": "Verwaltung",
                "Id": "130000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Sendungsverfolgung",
                    "OriginalCaption": "Sendungsverfolgung",
                    "Id": "70013",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "NVE Verwaltung",
                        "OriginalCaption": "NVE Verwaltung",
                        "Id": "70196",
                        "Type": "Dialog",
                        "HintText": "Packstückebene",
                        "Level": 2,
                        "Children": [{
                            "Caption": "NVE Verwaltung (Soloplan-Vorgabe)",
                            "OriginalCaption": "NVE Verwaltung (Soloplan-Vorgabe)",
                            "Id": "939fe1e0-e451-4963-9c9e-113d6b7da124",
                            "Type": "Layout",
                            "HintText": "NVE Verwaltung (Soloplan-Vorgabe)",
                            "Level": 3,
                            "Children": [{
                                "Caption": "NVE",
                                "OriginalCaption": "NVE",
                                "Id": "939fe1e0-e451-4963-9c9e-113d6b7da124_LayoutControlGroup_170000_{6C79F395-B743-49AF-A937-0250C4343DD9}",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 4,
                                "Children": null
                            }]
                        }]
                    }]
                },
                    {
                        "Caption": "Termine",
                        "OriginalCaption": "Termine",
                        "Id": "70180",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Termine",
                            "OriginalCaption": "Termine",
                            "Id": "90501",
                            "Type": "Dialog",
                            "HintText": "Termine",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Termine (Soloplan-Vorgabe)",
                                "OriginalCaption": "Termine (Soloplan-Vorgabe)",
                                "Id": "b9d2a120-2ed0-4c94-a214-9b64d5c9a510",
                                "Type": "Layout",
                                "HintText": "Termine (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Termine",
                                    "OriginalCaption": "Termine",
                                    "Id": "b9d2a120-2ed0-4c94-a214-9b64d5c9a510_LayoutControlGroup_5015800",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Zuordnung",
                                        "OriginalCaption": "Zuordnung",
                                        "Id": "b9d2a120-2ed0-4c94-a214-9b64d5c9a510_LayoutControlGroup_5015800_{3D2499ED-2F5C-4632-A51B-E85CAA870148}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "b9d2a120-2ed0-4c94-a214-9b64d5c9a510_LayoutControlGroup_5015800_700000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        }]
                    },
                    {
                        "Caption": "Urlaubsplanung",
                        "OriginalCaption": "Urlaubsplanung",
                        "Id": "70300",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Wissensdatenbank",
                        "OriginalCaption": "Wissensdatenbank",
                        "Id": "130003",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Spesen",
                        "OriginalCaption": "Spesen",
                        "Id": "130006",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Projektplaner",
                        "OriginalCaption": "Projektplaner",
                        "Id": "140000",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Gehaltsabrechnung",
                        "OriginalCaption": "Gehaltsabrechnung",
                        "Id": "130010",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Abrechnungsspezifische Stammdaten",
                            "OriginalCaption": "Abrechnungsspezifische Stammdaten",
                            "Id": "130011",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": null
                        },
                            {
                                "Caption": "Gehaltsdaten Personal",
                                "OriginalCaption": "Gehaltsdaten Personal",
                                "Id": "130018",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Abrechnungserstellung",
                                "OriginalCaption": "Abrechnungserstellung",
                                "Id": "130024",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Arbeitsleistungserfassung",
                                "OriginalCaption": "Arbeitsleistungserfassung",
                                "Id": "130028",
                                "Type": "Folder",
                                "HintText": "",
                                "Level": 2,
                                "Children": null
                            }
                        ]
                    },
                    {
                        "Caption": "CRM",
                        "OriginalCaption": "CRM",
                        "Id": "80000",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Skripte",
                            "OriginalCaption": "Skripte",
                            "Id": "80100",
                            "Type": "Folder",
                            "HintText": "",
                            "Level": 2,
                            "Children": null
                        }]
                    },
                    {
                        "Caption": "KeyGen",
                        "OriginalCaption": "KeyGen",
                        "Id": "130039",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "KeyGen",
                            "OriginalCaption": "KeyGen",
                            "Id": "130036",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "KeyGen (Soloplan-Vorgabe)",
                                "OriginalCaption": "KeyGen (Soloplan-Vorgabe)",
                                "Id": "25f54d28-1277-40bf-ade5-86662e94e5fe",
                                "Type": "Layout",
                                "HintText": "KeyGen (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "KeyGen",
                                    "OriginalCaption": "KeyGen",
                                    "Id": "25f54d28-1277-40bf-ade5-86662e94e5fe_LayoutControlGroup_4900990",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "KS Freischaltungen",
                                "OriginalCaption": "KS Freischaltungen",
                                "Id": "130037",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "KS Freischaltungen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "KS Freischaltungen (Soloplan-Vorgabe)",
                                    "Id": "22f2267b-d269-4945-a587-5b3aa70a0488",
                                    "Type": "Layout",
                                    "HintText": "KS Freischaltungen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "KS Freischaltungen",
                                        "OriginalCaption": "KS Freischaltungen",
                                        "Id": "22f2267b-d269-4945-a587-5b3aa70a0488_LayoutControlGroup_5722300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Pakete",
                                "OriginalCaption": "Pakete",
                                "Id": "130038",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Pakete (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Pakete (Soloplan-Vorgabe)",
                                    "Id": "4bfc768d-7141-41f1-be81-3c92805f8052",
                                    "Type": "Layout",
                                    "HintText": "Pakete (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Pakete",
                                        "OriginalCaption": "Pakete",
                                        "Id": "4bfc768d-7141-41f1-be81-3c92805f8052_LayoutControlGroup_5722400",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "KS",
                        "OriginalCaption": "KS",
                        "Id": "60810",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Positionsrubriken",
                            "OriginalCaption": "Positionsrubriken",
                            "Id": "60813",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "KS Positionsrubriken (Soloplan-Vorgabe)",
                                "OriginalCaption": "KS Positionsrubriken (Soloplan-Vorgabe)",
                                "Id": "48466412-cb68-4a02-bc42-2cb1fb6b34b5",
                                "Type": "Layout",
                                "HintText": "KS Positionsrubriken (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Positionsrubriken",
                                    "OriginalCaption": "Positionsrubriken",
                                    "Id": "48466412-cb68-4a02-bc42-2cb1fb6b34b5_LayoutControlGroup_5012300",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "KS-Status",
                                "OriginalCaption": "KS-Status",
                                "Id": "60814",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "KS-Status (Soloplan-Vorgabe)",
                                    "OriginalCaption": "KS-Status (Soloplan-Vorgabe)",
                                    "Id": "7c08c2db-31b8-41cf-b8cc-7b8ea8a8a783",
                                    "Type": "Layout",
                                    "HintText": "KS-Status (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "KS-Status",
                                        "OriginalCaption": "KS-Status",
                                        "Id": "7c08c2db-31b8-41cf-b8cc-7b8ea8a8a783_LayoutControlGroup_5036900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            },
                            {
                                "Caption": "Prioritäten",
                                "OriginalCaption": "Prioritäten",
                                "Id": "60818",
                                "Type": "Dialog",
                                "HintText": "Prioritäten",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Prioritäten (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Prioritäten (Soloplan-Vorgabe)",
                                    "Id": "1bc5a1d5-ae14-4275-a678-8934f334f819",
                                    "Type": "Layout",
                                    "HintText": "Prioritäten (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Prioritäten",
                                        "OriginalCaption": "Prioritäten",
                                        "Id": "1bc5a1d5-ae14-4275-a678-8934f334f819_LayoutControlGroup_60000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Externe Referenzen",
                                            "OriginalCaption": "Externe Referenzen",
                                            "Id": "1bc5a1d5-ae14-4275-a678-8934f334f819_LayoutControlGroup_60000_{AAE9765B-F388-4B95-ACAE-825216BC83DA}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Produktkategorien",
                                "OriginalCaption": "Produktkategorien",
                                "Id": "63003",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Produktbereiche (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Produktbereiche (Soloplan-Vorgabe)",
                                    "Id": "e8db8cd0-d0d5-4a78-9f20-4b59a997c351",
                                    "Type": "Layout",
                                    "HintText": "Produktbereiche (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Produktkategorien",
                                        "OriginalCaption": "Produktkategorien",
                                        "Id": "e8db8cd0-d0d5-4a78-9f20-4b59a997c351_LayoutControlGroup_5053000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Produktversionen",
                                            "OriginalCaption": "Produktversionen",
                                            "Id": "e8db8cd0-d0d5-4a78-9f20-4b59a997c351_LayoutControlGroup_5053000_{587F0209-2996-46C2-B189-EFF7A708B344}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Externe Referenzen",
                                            "OriginalCaption": "Externe Referenzen",
                                            "Id": "e8db8cd0-d0d5-4a78-9f20-4b59a997c351_LayoutControlGroup_5053000_5053010",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Benutzerdefinierte Felder",
                                            "OriginalCaption": "Benutzerdefinierte Felder",
                                            "Id": "e8db8cd0-d0d5-4a78-9f20-4b59a997c351_LayoutControlGroup_5053000_700000",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            },
                            {
                                "Caption": "Produktversionen",
                                "OriginalCaption": "Produktversionen",
                                "Id": "63005",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Produktversionen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Produktversionen (Soloplan-Vorgabe)",
                                    "Id": "7dfede2e-e82f-4651-bec6-b192e5077b81",
                                    "Type": "Layout",
                                    "HintText": "Produktversionen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Produktversionen",
                                        "OriginalCaption": "Produktversionen",
                                        "Id": "7dfede2e-e82f-4651-bec6-b192e5077b81_LayoutControlGroup_5034300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                        {
                                            "Caption": "Produktkategorien",
                                            "OriginalCaption": "Produktkategorien",
                                            "Id": "7dfede2e-e82f-4651-bec6-b192e5077b81_LayoutControlGroup_5034300_{2178E449-5803-4991-A6B7-312E9B061298}",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        },
                                        {
                                            "Caption": "Externe Referenzen",
                                            "OriginalCaption": "Externe Referenzen",
                                            "Id": "7dfede2e-e82f-4651-bec6-b192e5077b81_LayoutControlGroup_5034300_5034310",
                                            "Type": "TabSheet",
                                            "HintText": "",
                                            "Level": 4,
                                            "Children": null
                                        }
                                    ]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "inTOUR",
                        "OriginalCaption": "inTOUR",
                        "Id": "70322",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    }
                ]
            },
            {
                "Caption": "Statistik",
                "OriginalCaption": "Statistik",
                "Id": "50000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Standard Statistiken",
                    "OriginalCaption": "Standard Statistiken",
                    "Id": "50001",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": null
                },
                    {
                        "Caption": "Erweiterte Statistiken",
                        "OriginalCaption": "Erweiterte Statistiken",
                        "Id": "50020",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "inMOTION-Statistiken",
                        "OriginalCaption": "inMOTION-Statistiken",
                        "Id": "90800",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Individuelle Statistiken",
                        "OriginalCaption": "Individuelle Statistiken",
                        "Id": "50040",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Cockpit",
                        "OriginalCaption": "Cockpit",
                        "Id": "50400",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": null
                    }
                ]
            },
            {
                "Caption": "Fuhrpark",
                "OriginalCaption": "Fuhrpark",
                "Id": "90000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Belegimport",
                    "OriginalCaption": "Belegimport",
                    "Id": "90520",
                    "Type": "Folder",
                    "HintText": "",
                    "Level": 1,
                    "Children": [{
                        "Caption": "Belegimportschnittstellen",
                        "OriginalCaption": "Belegimportschnittstellen",
                        "Id": "90521",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 2,
                        "Children": [{
                            "Caption": "Belegimport (Soloplan-Vorgabe)",
                            "OriginalCaption": "Belegimport (Soloplan-Vorgabe)",
                            "Id": "993fd4e0-2f4d-476e-a89b-d2c9d654e741",
                            "Type": "Layout",
                            "HintText": "Belegimport (Soloplan-Vorgabe)",
                            "Level": 3,
                            "Children": [{
                                "Caption": "Belegimportschnittstellen",
                                "OriginalCaption": "Belegimportschnittstellen",
                                "Id": "993fd4e0-2f4d-476e-a89b-d2c9d654e741_LayoutControlGroup_5016200",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 4,
                                "Children": null
                            }]
                        }]
                    },
                        {
                            "Caption": "Tankkarten",
                            "OriginalCaption": "Tankkarten",
                            "Id": "90524",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Tankkarten (Soloplan-Vorgabe)",
                                "OriginalCaption": "Tankkarten (Soloplan-Vorgabe)",
                                "Id": "40d9db02-bb52-4653-af58-e3654febc933",
                                "Type": "Layout",
                                "HintText": "Tankkarten (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Tankkarten",
                                    "OriginalCaption": "Tankkarten",
                                    "Id": "40d9db02-bb52-4653-af58-e3654febc933_LayoutControlGroup_5023000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        }
                    ]
                },
                    {
                        "Caption": "Kosten",
                        "OriginalCaption": "Kosten",
                        "Id": "90530",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Kostenbereiche",
                            "OriginalCaption": "Kostenbereiche",
                            "Id": "90531",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Kostenbereiche (Soloplan-Vorgabe)",
                                "OriginalCaption": "Kostenbereiche (Soloplan-Vorgabe)",
                                "Id": "4d9e25e3-c997-4fc5-aa2d-66737bfb0fe9",
                                "Type": "Layout",
                                "HintText": "Kostenbereiche (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Kostenbereiche",
                                    "OriginalCaption": "Kostenbereiche",
                                    "Id": "4d9e25e3-c997-4fc5-aa2d-66737bfb0fe9_LayoutControlGroup_5016100",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                }]
                            }]
                        },
                            {
                                "Caption": "Kostengruppen",
                                "OriginalCaption": "Kostengruppen",
                                "Id": "90532",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Kostengruppen (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Kostengruppen (Soloplan-Vorgabe)",
                                    "Id": "8ae9248f-eb02-42a3-88ea-d5b4d62bbe99",
                                    "Type": "Layout",
                                    "HintText": "Kostengruppen (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Kostengruppen",
                                        "OriginalCaption": "Kostengruppen",
                                        "Id": "8ae9248f-eb02-42a3-88ea-d5b4d62bbe99_LayoutControlGroup_5003900",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Belege",
                        "OriginalCaption": "Belege",
                        "Id": "90710",
                        "Type": "Folder",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Belegerfassung",
                            "OriginalCaption": "Belegerfassung",
                            "Id": "90714",
                            "Type": "Dialog",
                            "HintText": "",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Belegerfassung (Soloplan-Vorgabe)",
                                "OriginalCaption": "Belegerfassung (Soloplan-Vorgabe)",
                                "Id": "4446249d-cae7-4a25-8ae8-582a806da624",
                                "Type": "Layout",
                                "HintText": "Belegerfassung (Soloplan-Vorgabe)",
                                "Level": 3,
                                "Children": [{
                                    "Caption": "Belegangaben",
                                    "OriginalCaption": "Belegangaben",
                                    "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_{0A6130A0-3452-4387-9BF4-31821D579666}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 4,
                                    "Children": null
                                },
                                    {
                                        "Caption": "Beträge",
                                        "OriginalCaption": "Beträge",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_{1E475B19-60E9-443A-AE2C-6589FF634747}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "FiBu",
                                        "OriginalCaption": "FiBu",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_{665B684B-DD34-42DA-8C61-03A6C6A2A507}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Plankosten",
                                        "OriginalCaption": "Plankosten",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_{67748FA4-34A5-4B80-B34E-0B09593496B0}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Lieferscheine",
                                        "OriginalCaption": "Lieferscheine",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_5015756",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Benutzerdefinierte Felder",
                                        "OriginalCaption": "Benutzerdefinierte Felder",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_700000",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Schadensfälle",
                                        "OriginalCaption": "Schadensfälle",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_5015741",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Positionen",
                                        "OriginalCaption": "Positionen",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_5015756_5053922",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Tankstelle",
                                        "OriginalCaption": "Tankstelle",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_{0D8D65F0-BD21-4798-BE30-B20A6F2E6F55}",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    },
                                    {
                                        "Caption": "Weiterberechnete Belege",
                                        "OriginalCaption": "Weiterberechnete Belege",
                                        "Id": "4446249d-cae7-4a25-8ae8-582a806da624_LayoutControlGroup_5015700_5015763",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }
                                ]
                            }]
                        },
                            {
                                "Caption": "Import Belege XML",
                                "OriginalCaption": "Import Belege XML",
                                "Id": "90715",
                                "Type": "Dialog",
                                "HintText": "Import Belege XML",
                                "Level": 2,
                                "Children": null
                            },
                            {
                                "Caption": "Zyklische Belege",
                                "OriginalCaption": "Zyklische Belege",
                                "Id": "90713",
                                "Type": "Dialog",
                                "HintText": "",
                                "Level": 2,
                                "Children": [{
                                    "Caption": "Zyklische Belege (Soloplan-Vorgabe)",
                                    "OriginalCaption": "Zyklische Belege (Soloplan-Vorgabe)",
                                    "Id": "a952764c-b3a2-45ff-92a0-df97ddf3ff99",
                                    "Type": "Layout",
                                    "HintText": "Zyklische Belege (Soloplan-Vorgabe)",
                                    "Level": 3,
                                    "Children": [{
                                        "Caption": "Zyklische Belege",
                                        "OriginalCaption": "Zyklische Belege",
                                        "Id": "a952764c-b3a2-45ff-92a0-df97ddf3ff99_LayoutControlGroup_5715300",
                                        "Type": "TabSheet",
                                        "HintText": "",
                                        "Level": 4,
                                        "Children": null
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "Caption": "Tachostand",
                        "OriginalCaption": "Tachostand",
                        "Id": "90437",
                        "Type": "Dialog",
                        "HintText": "Tachostand",
                        "Level": 1,
                        "Children": [{
                            "Caption": "KilometerstandBearbeitbar (Soloplan Vorgabe)",
                            "OriginalCaption": "KilometerstandBearbeitbar (Soloplan Vorgabe)",
                            "Id": "561d90a6-93ce-487e-a814-40904a4940c3",
                            "Type": "Layout",
                            "HintText": "KilometerstandBearbeitbar (Soloplan Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Tachostand",
                                "OriginalCaption": "Tachostand",
                                "Id": "561d90a6-93ce-487e-a814-40904a4940c3_LayoutControlGroup_5016000",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            }]
                        }]
                    },
                    {
                        "Caption": "Tätigkeitsliste",
                        "OriginalCaption": "Tätigkeitsliste",
                        "Id": "90733",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Tätigkeitsliste (Soloplan-Vorgabe)",
                            "OriginalCaption": "Tätigkeitsliste (Soloplan-Vorgabe)",
                            "Id": "4fd24ed8-1af7-402b-98ac-9f0e55f28e51",
                            "Type": "Layout",
                            "HintText": "Tätigkeitsliste (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Tätigkeitsliste",
                                "OriginalCaption": "Tätigkeitsliste",
                                "Id": "4fd24ed8-1af7-402b-98ac-9f0e55f28e51_LayoutControlGroup_5001200",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            },
                                {
                                    "Caption": "Artikel",
                                    "OriginalCaption": "Artikel",
                                    "Id": "4fd24ed8-1af7-402b-98ac-9f0e55f28e51_LayoutControlGroup_5001200_{3BB91F29-6D40-4729-A1DB-05B5EBCC771B}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                }
                            ]
                        }]
                    },
                    {
                        "Caption": "Schadensfälle",
                        "OriginalCaption": "Schadensfälle",
                        "Id": "90731",
                        "Type": "Dialog",
                        "HintText": "",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Schadensfälle (Soloplan-Vorgabe)",
                            "OriginalCaption": "Schadensfälle (Soloplan-Vorgabe)",
                            "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446",
                            "Type": "Layout",
                            "HintText": "Schadensfälle (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Schadensfälle",
                                "OriginalCaption": "Schadensfälle",
                                "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446_LayoutControlGroup_5015300",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            },
                                {
                                    "Caption": "Unfallgegner",
                                    "OriginalCaption": "Unfallgegner",
                                    "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446_LayoutControlGroup_5015300_{BFFFB203-BE9C-44a2-B408-7A605279C0F4}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Unfallbeschreibung",
                                    "OriginalCaption": "Unfallbeschreibung",
                                    "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446_LayoutControlGroup_5015300_{B35998FF-6F30-4C0E-BE64-3B30FA8D1F88}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Termine",
                                    "OriginalCaption": "Termine",
                                    "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446_LayoutControlGroup_5015300_5015344",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Belege",
                                    "OriginalCaption": "Belege",
                                    "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446_LayoutControlGroup_5015300_5015343",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Tätigkeiten",
                                    "OriginalCaption": "Tätigkeiten",
                                    "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446_LayoutControlGroup_5015300_5015352",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Benutzerdefinierte Felder",
                                    "OriginalCaption": "Benutzerdefinierte Felder",
                                    "Id": "36f410c1-343d-4f9e-bcef-b43d7fded446_LayoutControlGroup_5015300_700000",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                }
                            ]
                        }]
                    }
                ]
            },
            {
                "Caption": "Lager",
                "OriginalCaption": "Lager",
                "Id": "100000",
                "Type": "Category",
                "HintText": "",
                "Level": 0,
                "Children": [{
                    "Caption": "Bestandsliste",
                    "OriginalCaption": "Bestandsliste",
                    "Id": "100011",
                    "Type": "Dialog",
                    "HintText": "Bestandsliste",
                    "Level": 1,
                    "Children": null
                },
                    {
                        "Caption": "Artikelpreise",
                        "OriginalCaption": "Artikelpreise",
                        "Id": "100014",
                        "Type": "Dialog",
                        "HintText": "Artikelpreise",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Lagerbuchungen",
                        "OriginalCaption": "Lagerbuchungen",
                        "Id": "100012",
                        "Type": "Dialog",
                        "HintText": "Lagerbuchungen",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Lagerbuchungen (Soloplan-Vorgabe)",
                            "OriginalCaption": "Lagerbuchungen (Soloplan-Vorgabe)",
                            "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb",
                            "Type": "Layout",
                            "HintText": "Lagerbuchungen (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Lagerbuchungen",
                                "OriginalCaption": "Lagerbuchungen",
                                "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            },
                                {
                                    "Caption": "Positionen",
                                    "OriginalCaption": "Positionen",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_5000638",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Werkstattangaben",
                                    "OriginalCaption": "Werkstattangaben",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_{DB58A187-A31F-4862-9772-9ECC53CC102A}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Informationen",
                                    "OriginalCaption": "Informationen",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_{6F61F7CD-2C64-4AAE-AC9E-F5707CD0E0C4}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Zusatzleistungen",
                                    "OriginalCaption": "Zusatzleistungen",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_5000641",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Artikelübersicht",
                                    "OriginalCaption": "Artikelübersicht",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_5000649",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Reklamation/Status",
                                    "OriginalCaption": "Reklamation/Status",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_5000657",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Buchungspositionen",
                                    "OriginalCaption": "Buchungspositionen",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_5000621",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Lademittel",
                                    "OriginalCaption": "Lademittel",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_{E3EFC1AE-2706-492C-B758-ACD80BA339C4}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Artikel",
                                    "OriginalCaption": "Artikel",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_5000621_5000708",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Lagerplätze",
                                    "OriginalCaption": "Lagerplätze",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_{17859212-FDB9-463B-AC30-64547E0D9FDF}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Reklamation/Status",
                                    "OriginalCaption": "Reklamation/Status",
                                    "Id": "dc62a984-fb99-4dbf-8001-a521fc19f1cb_LayoutControlGroup_5000600_5000621_5000733",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                }
                            ]
                        }]
                    },
                    {
                        "Caption": "Inventuren",
                        "OriginalCaption": "Inventuren",
                        "Id": "100013",
                        "Type": "Dialog",
                        "HintText": "Inventur",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Lagerinventur (Soloplan-Vorgabe)",
                            "OriginalCaption": "Lagerinventur (Soloplan-Vorgabe)",
                            "Id": "97dd004a-0caa-4e0a-b8fe-77ee8447a32d",
                            "Type": "Layout",
                            "HintText": "Lagerinventur (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Inventuren",
                                "OriginalCaption": "Inventuren",
                                "Id": "97dd004a-0caa-4e0a-b8fe-77ee8447a32d_LayoutControlGroup_5001600",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            },
                                {
                                    "Caption": "Inventur Positionen",
                                    "OriginalCaption": "Inventur Positionen",
                                    "Id": "97dd004a-0caa-4e0a-b8fe-77ee8447a32d_LayoutControlGroup_5001600_5001616",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                }
                            ]
                        }]
                    },
                    {
                        "Caption": "Lagergeldberechnung",
                        "OriginalCaption": "Lagergeldberechnung",
                        "Id": "100010",
                        "Type": "Dialog",
                        "HintText": "Lagergeldberechnung",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Generierung MTV-Nummern",
                        "OriginalCaption": "Generierung MTV-Nummern",
                        "Id": "123002",
                        "Type": "Dialog",
                        "HintText": "Generierung MTV-Nummern",
                        "Level": 1,
                        "Children": null
                    },
                    {
                        "Caption": "Lageransicht",
                        "OriginalCaption": "Lageransicht",
                        "Id": "100016",
                        "Type": "Dialog",
                        "HintText": "Lageransicht ",
                        "Level": 1,
                        "Children": [{
                            "Caption": "Warehouse (Soloplan-Vorgabe)",
                            "OriginalCaption": "Warehouse (Soloplan-Vorgabe)",
                            "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab",
                            "Type": "Layout",
                            "HintText": "Warehouse (Soloplan-Vorgabe)",
                            "Level": 2,
                            "Children": [{
                                "Caption": "Lager",
                                "OriginalCaption": "Lager",
                                "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500",
                                "Type": "TabSheet",
                                "HintText": "",
                                "Level": 3,
                                "Children": null
                            },
                                {
                                    "Caption": "Lagergeld",
                                    "OriginalCaption": "Lagergeld",
                                    "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500_{FF353E82-F9F0-4B31-ABEA-0F3F7B64974D}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Lagerbereiche",
                                    "OriginalCaption": "Lagerbereiche",
                                    "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500_{ABB9E2E7-9D2D-4F68-AD29-8EF556FF70BF}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                },
                                {
                                    "Caption": "Gefahrgutwerte",
                                    "OriginalCaption": "Gefahrgutwerte",
                                    "Id": "f8e4879e-4b44-4dce-82ff-9afa930d47ab_LayoutControlGroup_5000500_{BBF27548-78FD-430A-B0BE-9890225DAA41}",
                                    "Type": "TabSheet",
                                    "HintText": "",
                                    "Level": 3,
                                    "Children": null
                                }
                            ]
                        }]
                    }
                ]
            }
        ]`;
    }
}
