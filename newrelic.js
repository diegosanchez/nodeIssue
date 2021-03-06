var config = require("config");
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
    /**
     * Array of application names.
     */
    app_name : ["Iamat Nodeserver " + (process.env.NODE_ENV || "")],
    /**
     * Your New Relic license key.
     */
    license_key : "insertKeyHere",
    logging : {
        /**
         * Level at which to log. 'trace' is most useful to New Relic when diagnosing
         * issues with the agent, 'info' and higher will impose the least overhead on
         * production applications.
         */
        level : "info"
    },
    rules : {
        ignore : [
            "^/socket.io/.*/.*-polling",
            "^/\*$"
        ]
    },
    error_collector : {
        ignore_status_codes : [400, 401, 403, 404]
    }
};
