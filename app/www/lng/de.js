de = JSON.parse('{\
    "DEBUG_MODE_ENABLED": "Debug-Modus aktiviert",\
    "DEBUG_MODE_DISABLED": "Debug-Modus deaktiviert",\
    "TITLE_EVNOTIFY": "EVNotify",\
    "HEADER_OVERVIEW": "Übersicht",\
    "MENU_OVERVIEW": "Übersicht",\
    "MENU_CHARGE": "Ladezyklen",\
    "MENU_NOTIFYME": "NotifyMe",\
    "MENU_SETTINGS": "Einstellungen",\
    "MISSING_CONFIGURATION": "Kein Gerät und/oder Auto ausgewählt. Bitte in den Einstellungen entsprechend eintragen",\
    "NEXT": "Weiter",\
    "CANCEL": "Abbrechen",\
    "LANGUAGE_SETUP": "Sprachauswahl",\
    "LNG_EN": "Englisch",\
    "LNG_DE": "Deutsch",\
    "WELCOME": "Willkommen bei EVNotify",\
    "WELCOME_TEXT": "Bevor Du Dich allerdings über den Ladezustand Deines Elektroautos benachrichtigen lassen kannst,\
    muss zunächst ein Account erstellt werden. Dieser dient zur Verwaltung der Benachrichtigungen.\
    Stelle sicher, dass Du über eine aktive Internet- sowie Bluetooth-Verbindung verfügst.\
    Die App benötigt zudem einen entsprechenden OBD2-Dongle. Schalte das Bluetooth bei der Nutzung von EVNotify immer ein.",\
    "REGISTER": "Account erstellen",\
    "REGISTER_TEXT": "Fast geschafft. Fehlt nur noch ein Passwort. Zur eigenen Sicherheit bitte ein starkes Passwort wählen (mind. 6 Zeichen).",\
    "PASSWORD_LENGTH_ERROR": "Das Passwort muss aus mindestens 6 Zeichen bestehen.",\
    "CONNECTION_ERROR": "Netzwerkfehler. Bitte erneut versuchen.",\
    "SETUP_COMPLETE": "Geschafft!",\
    "SETUP_COMPLETE_TEXT": "Du bist nun bereit, den Ladezustand Deines Elektroautos zu überwachen. Alles was Du nun tun musst, ist Deine gewünschten\
    Benachrichtigunswege anzugeben und den OBD2-Dongle, welcher an die OBD2-Schnittstelle des Autos angesteckt werden muss, auszuwählen.\
    Anschließend speichern. Alle Einstellungen können jederzeit angepasst werden. Bitte beachte, dass manche OBD2-Dongle auch dann aktiv bleiben, wenn das Auto längst aus ist.\
    Lasse den OBD2-Dongle daher nicht über einen längeren Zeitraum angesteckt. Falls Du Fragen oder Fehler gefunden hast, geh bitte in das entsprechende Repository auf GitHub.\
    EVNotify befindet sich noch im Entwicklungsstadium. Bitte nicht vergessen - es steckt viel Arbeit hinter all dem. Wenn was nicht klappt, melden - dann wird es behoben ;-)",\
    "LOGIN": "Anmelden",\
    "LOGIN_TEXT": "Melde Dich mit Deinem bestehenden Account an.",\
    "LOGIN_FAILED": "Anmeldung fehlgeschlagen.",\
    "LOGIN_SUCCESSFUL": "Anmeldung erfolgreich.",\
    "OLD_PASSWORD": "Altes Passwort",\
    "OLD_PASSWORD_TEXT": "Bitte gib Dein altes Passwort an.",\
    "NEW_PASSWORD": "Neues Passwort",\
    "NEW_PASSWORD_TEXT": "Gib nun Dein neues Passwort an.",\
    "NEW_PASSWORD_RETYPE": "Passwort wiederholen",\
    "NEW_PASSWORD_RETYPE_TEXT": "Gib Dein neues Passwort zur Bestätigung erneut an.",\
    "PASSWORD_MISMATCH": "Die Passwörter stimmen nicht überein.",\
    "CHANGE_PASSWORD_FAILED": "Fehler beim Ändern des Passworts aufgetreten.",\
    "CHANGE_PASSWORD_SUCCESSFUL": "Das Passwort wurde erfolgreich geändert.",\
    "CHARGING_STATE": "Ladezustand ",\
    "NOTIFICATION_SENT_ERROR": "Fehler beim Senden der Benachrichtigungen aufgetreten.",\
    "BLUETOOTH_DATA_SENT_ERROR": "Fehler beim Senden der Daten per Bluetooth aufgetreten.",\
    "BLUETOOTH_CONNECTED": "Verbindung erfolgreich hergestellt. Drücke nun den Start-Knopf oben, um zu starten!",\
    "BLUETOOTH_NOT_CONNECTED": "Verbindung fehlgeschlagen.",\
    "PREPARATION": "Vorbereitung.. Bitte warten..",\
    "BLUETOOTH_CONNECTION_ERROR": "Es konnte keine Bluetooth-Verbindung mit dem Gerät hergestellt werden.",\
    "BLUETOOTH_DISABLED": "Bluetooth ist nicht aktiviert. Bitte Bluetooth einschalten!",\
    "UNSUPPORTED_CAR": "Nicht unterstützes Auto. Weitere Autos werden in Zukunft unterstützt werden.",\
    "UNSUPPORTED_DEVICE": "Das Gerät bzw. die Plattform wird nicht unterstützt. Eine Web-Version kommt in Zukunft.",\
    "SETTINGS_PASSWORD": "Passwort",\
    "SETTINGS_PASSWORD_TEXT": "Bitte gib Dein Passwort ein, um die Einstellungen zu speichern.",\
    "SET_SETTINGS_FAILED": "Speichern der Einstellungen fehlgeschlagen.",\
    "GET_SETTINGS_FAILED": "Holen der Einstellungen fehlgeschlagen.",\
    "SET_SETTINGS_SUCCESSFUL": "Die Einstellungen wurden erfolgreich gespeichert.",\
    "HEADER_SETTINGS": "Einstellungen",\
    "SETTINGS_ACCOUNT": "Benutzerkonto",\
    "SETTINGS_AKEY": "AKey",\
    "CHANGE_PASSWORD": "Passwort ändern",\
    "LANGUAGE": "Sprache",\
    "NOTIFICATIONS": "Benachrichtigungen",\
    "EMAIL_NOTIFICATION": "E-Mail-Adresse",\
    "PUSH_NOTIFICATION": "Push-Benachrichtigung",\
    "TELEGRAM_NOTIFICATION": "Telegram-Benachrichtigung",\
    "TELEGRAM_MANAGE_NOTIFICATION": "Telegram-Verknüpfung verwalten",\
    "TELEGRAM_UNSUBSCRIBE": "Telegram-Benachrichtigung abwählen",\
    "TELEGRAM_UNSUBSCRIBE_TEXT": "Um keine Telegram-Benachrichtigungen mehr zu erhalten, dem Telegram-Bot (https://telegram.me/evnotifybot) einfach /unsubscribe schreiben.\
    Du kannst die Telegram-Benachrichtigungen jederzeit wieder aktivieren.",\
    "TELEGRAM_SUBSCRIBE": "Telegram-Benachrichtigungen aktivieren",\
    "TELEGRAM_SUBSCRIBE_TEXT": "Um Telegram-Benachrichtigungen zu aktivieren, schreibe dem Telegram-Bot (https://telegram.me/evnotifybot) einfach /subscribe.\
    Gib dabei den untenstehenden Token an. Diesen niemals an Dritte weitergeben! Am besten löschst Du nach der Einrichtigung die Textnachricht von Telegram mit dem Token.",\
    "SETTINGS_SOC_HELP": "Der gewünschte Ladezustand, bei dem die Benachrichtigungen verschickt werden sollen.",\
    "SETTINGS_SYSTEM": "System",\
    "SETTINGS_DEVICES": "Bluetooth-Gerät",\
    "SETTINGS_POLLING": "Abfrage-Intervall",\
    "POLLING_30": "alle 30 Sekunden",\
    "POLLING_60": "jede Minute",\
    "POLLING_300": "alle 5 Minuten",\
    "POLLING_600": "alle 10 Minuten",\
    "POLLING_1800": "jede halbe Stunde",\
    "POLLING_3600": "jede Stunde",\
    "POLLING_WARNING": "Kurze Abfrage-Intervalle führen zu erhöhtem Akkuverbrauch.",\
    "SAVE_SETTINGS": "Einstellungen speichern"\
}');
