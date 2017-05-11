angular.module('userProfiles')
    .controller('profileCtrl', function($scope,friendService) {
            // FIX ME - assign values to $scope.currentUser and $scope.friends

                friendService.getFriends().then(function(res) {
                    console.log(res)
                    $scope.currentUser = res.data.currentUser;
                    $scope.friends = res.data.friends;
                })

        });
