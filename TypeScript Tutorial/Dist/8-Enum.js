"use strict";
const Notific = {
    Succes: 0,
    Error: 1,
    Warning: 2
};
function senNotification(notificationType) {
    const selectedNotification = Notific[notificationType];
    switch (selectedNotification) {
        case Notific.Succes: {
            console.log("Success");
            break;
        }
        case Notific["Error"]: {
            console.error("Error");
            break;
        }
        case Notific.Warning: {
            console.warn("Warning");
        }
    }
}
senNotification("Error");
