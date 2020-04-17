import { Subject } from 'rxjs/Subject';
import { NotifierAction } from './../models/notifier-action.model';
/**
 * Notifier queue service
 *
 * In general, API calls don't get processed right away. Instead, we have to queue them up in order to prevent simultanious API calls
 * interfering with each other. This, at least in theory, is possible at any time. In particular, animations - which potentially overlap -
 * can cause changes in JS classes as well as affect the DOM. Therefore, the queue service takes all actions, puts them in a queue, and
 * processes them at the right time (which is when the previous action has been processed successfully).
 *
 * Technical sidenote:
 * An action looks pretty similar to the ones within the Flux / Redux pattern.
 */
export declare class NotifierQueueService {
    /**
     * Stream of actions, subscribable from outside
     */
    readonly actionStream: Subject<NotifierAction>;
    /**
     * Queue of actions
     */
    private actionQueue;
    /**
     * Flag, true if some action is currently in progress
     */
    private isActionInProgress;
    /**
     * Constructor
     */
    constructor();
    /**
     * Push a new action to the queue, and try to run it
     *
     * @param {NotifierAction} action Action object
     */
    push(action: NotifierAction): void;
    /**
     * Continue with the next action (called when the current action is finished)
     */
    continue(): void;
    /**
     * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
     */
    private tryToRunNextAction();
}
