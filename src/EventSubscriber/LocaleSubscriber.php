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
        $locale = $request->attributes->get('_locale');
        if (!$locale)
        {
            $locale = $request->getSession()->get('_locale');
        }
        if (!$locale){
            $locale = $request->headers->get('Accept-Language');
        }
        if (!$locale){
            $locale = $this->defaultLocale;
        }
        $request->setLocale($locale);
        $request->getSession()->set('_locale', $locale);
        if ($request->getPathInfo() === "/" || $request->getPathInfo() === "") {
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
