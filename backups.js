     function send() {
            OneSignal.sendSelfNotification(
                /* Title (defaults if unset) */
                "My titme",
                /* Message (defaults if unset) */
                "Action buttons increase the ways your users can interact with your notification.",
                /* URL (defaults if unset) */
                'https://onesignal.com/apps/ad76ebf3-8237-46c4-a8c7-98c893db77f2/segments',
                /* Icon */
                'https://onesignal.com/images/notification_logo.png', {
                    /* Additional data hash */
                    notificationType: 'news-feature'
                }, [{ /* Buttons */
                        /* Choose any unique identifier for your button. The ID of the clicked button is passed to you so you can identify which button is clicked */
                        id: 'like-button',
                        /* The text the button should display. Supports emojis. */
                        text: 'Like',
                        /* A valid publicly reachable URL to an icon. Keep this small because it's downloaded on each notification display. */
                        icon: 'http://i.imgur.com/N8SN8ZS.png',
                        /* The URL to open when this action button is clicked. See the sections below for special URLs that prevent opening any window. */
                        url: 'https://onesignal.com/apps/ad76ebf3-8237-46c4-a8c7-98c893db77f2/segments'
                    },
                    {
                        id: 'read-more-button',
                        text: 'Read more',
                        icon: 'http://i.imgur.com/MIxJp1L.png',
                        url: 'https://onesignal.com/apps/ad76ebf3-8237-46c4-a8c7-98c893db77f2/segments'
                    }
                ]
            );
        }