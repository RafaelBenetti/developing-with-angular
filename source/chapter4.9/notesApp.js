angular.module('notesApp', [])
       .controller('MainController', [function(){
         var self = this;
         self.countries = [
           { id: 1, label: 'USA'},
           { id: 2, label: 'India'},
           { id: 2, label: 'India'},
           { id: 3, label: 'Other'},
         ];
         self.selectedCountryId = 2;
         self.selectedCountry = self.countries[1];
       }]);
