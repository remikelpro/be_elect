<?php
namespace App\Serializer;

use App\Entity\Resultat;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class PercentNormalizer implements NormalizerInterface
{
    public function __construct(
        #[Autowire(service: 'serializer.normalizer.object')]
        private readonly NormalizerInterface $normalizer,

        private UrlGeneratorInterface $router,
    ) {
    }

    public function normalize($result, ?string $format = null, array $context = []): array
    {
        $data = $this->normalizer->normalize($result, $format, $context);
        $data['percent'] = $result->getNormalizePercent();

        return $data;
    }

    public function supportsNormalization($data, ?string $format = null, array $context = []): bool
    {
        return $data instanceof Resultat;
    }

    public function getSupportedTypes(?string $format): array
    {
        return [
            Resultat::class => true,
        ];
    }
}