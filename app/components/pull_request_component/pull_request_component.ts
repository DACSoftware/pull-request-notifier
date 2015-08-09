///<reference path="../../_typings.ts"/>

module BitbucketNotifier {
    export class PullRequestComponent implements ng.IDirective {
        restrict = 'E';
        //require: 'pull-requests-list';
        templateUrl = '../components/pull_request_component/pull_request_compontent.html';

        static factory(): ng.IDirectiveFactory {
            return () => new PullRequestComponent();
        }
    }
}