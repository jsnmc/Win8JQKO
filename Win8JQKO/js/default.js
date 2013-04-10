// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
                
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    function alert(content, title) {
        var messageDialog = new Windows.UI.Popups.MessageDialog(content, title);
        messageDialog.showAsync();
    }

    ///////////////////////////////////////////////////////////
    // BASIC KNOCKOUT SAMPLE
    // Class to represent a row in the seat reservations grid
    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
    }

    // Overall viewmodel for this screen, along with initial state
    function ReservationsViewModel() {
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
        ];

        // Editable data
        self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
        ]);
    }

    //////////////////////////////////////////////////////////////////
    // Alt test VM
    var viewModel = function () {
        var self = this;
        self.val = ko.observable(50);
        self.min = ko.observable(0);
        self.max = ko.observable(100);
    };


    //Main Execution
    function initialize() {
        // Activates knockout.js
        ko.applyBindings(new ReservationsViewModel());
    }

    app.start();

    //If Document fully loaded than begin processing - needed for Knockout
    document.addEventListener("DOMContentLoaded", initialize, false);


})();
