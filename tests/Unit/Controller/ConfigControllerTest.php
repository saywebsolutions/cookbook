<?php

namespace OCA\Cookbook\tests\Unit\Controller;

require_once(__DIR__ . '/AbstractControllerTestCase.php');

namespace OCA\Cookbook\tests\Unit\Controller;

use OCP\IRequest;
use PHPUnit\Framework\TestCase;
use OCA\Cookbook\Service\RecipeService;
use OCA\Cookbook\Service\DbCacheService;
use OCA\Cookbook\Helper\RestParameterParser;
use PHPUnit\Framework\MockObject\MockObject;
use OCA\Cookbook\Controller\ConfigController;
use OCA\Cookbook\Controller\Implementation\ConfigImplementation;
use OCA\Cookbook\Helper\UserFolderHelper;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\Response;
use ReflectionProperty;

/**
 * @covers OCA\Cookbook\Controller\ConfigController
 */
class ConfigControllerTest extends AbstractControllerTestCase {

	protected function getClassName(): string {
		return ConfigController::class;
	}

	protected function getImplementationClassName(): string {
		return ConfigImplementation::class;
	}

	protected function getMethodsAndParameters(): array {
		return [
			['name' => 'list'],
			['name' => 'reindex'],
			['name' => 'config', 'once' => true],
		];
	}

}
