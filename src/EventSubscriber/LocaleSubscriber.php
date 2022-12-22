<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class LocaleSubscriber implements EventSubscriberInterface
{
    private $defaultLocale;

    public function __construct(string $defaultLocale = 'fr')
    {
        $this->defaultLocale = $defaultLocale;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $request = $event->getRequest();
        if ($request->headers->has("Accept-Language")) {
            $locale = $request->headers->get('Accept-Language');
            $request->setLocale($locale);
        }
        if (!$request->hasPreviousSession()) {
            return;
        }
        if ($locale = $request->attributes->get('_locale')) {
            $request->getSession()->set('_locale', $locale);
        } else if (!$locale = $request->getSession()->get('_locale')){
            $request->setLocale($request->getSession()->get('_locale', $this->defaultLocale));
        }
        if ($request->getPathInfo() === "/") {
            $response = new RedirectResponse($locale);
            $event->setResponse($response);
        }

    }

    public static function getSubscribedEvents()
    {
        return [
            // must be registered before (i.e. with a higher priority than) the default Locale listener
            KernelEvents::REQUEST => [['onKernelRequest', 20]],
        ];
    }
}
