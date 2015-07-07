/**
* TaskWorkerService
* @namespace crowdsource.task-worker.services
*/
(function () {
  'use strict';

  angular
    .module('crowdsource.task-worker.services')
    .factory('TaskWorker', TaskWorker);

  TaskWorker.$inject = ['$cookies', '$q', '$location', 'HttpService'];

  /**
  * @namespace TaskWorker
  * @returns {Factory}
  */

  function TaskWorker($cookies, $q, $location, HttpService) {
    /**
    * @name TaskWorker
    * @desc The Factory to be returned
    */
    var TaskWorker = {
      getTaskWorker: getTaskWorker
    };

    return TaskWorker;


    function getTaskWorker(taskWorkerId) {
      var settings = {
        url: '/api/task-worker/' + taskWorkerId + '/',
        method: 'GET'
      };
      return HttpService.doRequest(settings);
    }

  }
})();